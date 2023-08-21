import { useQuery } from '@tanstack/react-query';
import { getAll } from '../services/astronauts';
import { Astronaut } from '../types';
import { AstronautTable } from './AstronautTable';

export const Home = () => {
  const queryResult = useQuery({
    queryKey: ['astronauts'],
    queryFn: getAll,
  });

  if (queryResult.isLoading) {
    return <div>loading data ...</div>;
  }

  // console.log('raw', queryResult.data?.results);

  const myData: Astronaut[] | undefined = queryResult.data?.results?.map(
    (item) => ({
      name: item.name,
      age: item.age,
      agency: item.agency,
      agency_abbrev: item.agency.abbrev,
      nationality: item.nationality,
      in_space: item.in_space,
      status: item.status,
      status_name: item.status.name,
      flights_count: item.flights_count,
      spacewalks_count: item.spacewalks_count,
      id: item.id,
      key: `key-${item.id}`,
    }),
  );

  const activeAstronauts: Astronaut[] | undefined = myData?.filter(
    (item: Astronaut) => item.status_name === 'Active',
  );
  const retiredAstronauts: Astronaut[] | undefined = myData?.filter(
    (item: Astronaut) => item.status_name === 'Retired',
  );
  const currentlyInSpace: Astronaut[] | undefined = myData?.filter(
    (item: Astronaut) => item.in_space === true,
  );

  return (
    <div>
      <section id="active-astronauts">
        <AstronautTable
          dataSource={activeAstronauts}
          dataTitle="Active Astronauts"
        />
      </section>
      <section id="retired-astronauts">
        <AstronautTable
          dataSource={retiredAstronauts}
          dataTitle="Retired Astronauts"
        />
      </section>
      <section id="currently-in-space">
        <AstronautTable
          dataSource={currentlyInSpace}
          dataTitle="Currently in Space"
        />
      </section>
    </div>
  );
};
