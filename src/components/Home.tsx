import { useQuery } from '@tanstack/react-query';
import { getAll } from '../services/astronauts';
import { Astronaut } from '../types';

export const Home = () => {
  const queryResult = useQuery({
    queryKey: ['astronauts'],
    queryFn: getAll,
  });

  if (queryResult.isLoading) {
    return <div>loading data ...</div>;
  }

  const myData: Astronaut[] | undefined = queryResult.data?.results.map(
    (item) => ({
      name: item.name,
      age: item.age,
      agency: item.agency,
      nationality: item.nationality,
      status: item.status,
      flights_count: item.flights_count,
      spacewalks_count: item.spacewalks_count,
    }),
  );
  console.log('DATA', myData);

  return (
    <div>
      <section id="active-astronauts">
        <div style={{ height: 500 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sequi
          at voluptates beatae nulla optio eius quaerat, ad eaque enim obcaecati
          non voluptas esse cumque tenetur, id blanditiis vel dolor.
        </div>
      </section>
      <section id="retired-astronauts">
        <div style={{ height: 500 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sequi
          at voluptates beatae nulla optio eius quaerat, ad eaque enim obcaecati
          non voluptas esse cumque tenetur, id blanditiis vel dolor.
        </div>
      </section>
      <section id="currently-in-space">
        <div style={{ height: 500 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sequi
          at voluptates beatae nulla optio eius quaerat, ad eaque enim obcaecati
          non voluptas esse cumque tenetur, id blanditiis vel dolor.
        </div>
      </section>
    </div>
  );
};
