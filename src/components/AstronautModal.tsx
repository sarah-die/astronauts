import { useQuery } from '@tanstack/react-query';
import { Col, Divider, Image, Modal, Row, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentAstronautIdState } from 'recoilState/atom';
import { getById } from 'services/astronauts';
import { Astronaut } from 'types';

const { Title, Text } = Typography;

export const AstronautModal = () => {
  const [currentAstronautId, setCurrentAstronautId] = useRecoilState(
    currentAstronautIdState,
  );

  const queryAstronautById = useQuery({
    queryKey: ['astronautById', currentAstronautId],
    queryFn: () => getById(currentAstronautId),
  });

  const astronaut: Astronaut | null = queryAstronautById.data ?? null;

  // if (!astronaut) return null;

  return (
    <Modal
      title={astronaut?.name}
      centered
      open={!!currentAstronautId}
      onCancel={() => setCurrentAstronautId(null)}
      footer={null}
    >
      {!astronaut ? (
        <Row justify="center">
          <Spin />
        </Row>
      ) : (
        <Row gutter={15}>
          <Col span={14}>
            <Title level={4}>{astronaut.name}</Title>
            <Text>Born on {astronaut.date_of_birth}</Text>
            <Text>Age: {astronaut.age} years</Text>
          </Col>
          <Col span={10}>
            <Image width={150} src={astronaut.profile_image} />
          </Col>
          <Divider />
          <Text>{astronaut.bio}</Text>
          <Divider />
          <Text>
            Click <Link to={astronaut.wiki}>here</Link> for more information.
          </Text>
        </Row>
      )}
    </Modal>
  );
};
