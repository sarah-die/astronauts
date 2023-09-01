import { Astronaut } from 'types';
import { AstronautTable } from './AstronautTable';
import { Col, Row } from 'antd';
import { useAstronautData } from 'hooks/apiFetches/useAstronautData';

export const Home = () => {
  const queryAstronauts = useAstronautData();

  const myData: Astronaut[] =
    queryAstronauts.data?.results?.map((item: Astronaut) => ({
      ...item,
      key: `key-${item.id}`,
    })) || [];

  const activeAstronauts = myData.filter(
    (item) => item.status.name === 'Active',
  );
  const retiredAstronauts: Astronaut[] = myData.filter(
    (item: Astronaut) => item.status.name === 'Retired',
  );
  const currentlyInSpace: Astronaut[] = myData.filter(
    (item: Astronaut) => item.in_space,
  );

  return (
    <Row style={{ display: 'flex', justifyContent: 'center' }}>
      <Col className="gutter-row" span={22}>
        <section id="active-astronauts">
          <AstronautTable
            dataSource={activeAstronauts}
            dataTitle="Active Astronauts"
          />
        </section>
      </Col>
      <Col className="gutter-row" span={22}>
        <section id="retired-astronauts">
          <AstronautTable
            dataSource={retiredAstronauts}
            dataTitle="Retired Astronauts"
          />
        </section>
      </Col>
      <Col className="gutter-row" span={22}>
        <section id="currently-in-space">
          <AstronautTable
            dataSource={currentlyInSpace}
            dataTitle="Currently in Space"
          />
        </section>
      </Col>
    </Row>
  );
};
