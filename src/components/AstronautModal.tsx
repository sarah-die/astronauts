import { useQuery } from '@tanstack/react-query';
import { Col, Divider, Image, Modal, Row, Spin, Typography } from 'antd';
import { format, parse } from 'date-fns';
import { Trans, useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

  const queryAstronautById = useQuery({
    queryKey: ['astronautById', currentAstronautId],
    queryFn: () => getById(currentAstronautId),
  });

  const astronaut: Astronaut | null = queryAstronautById.data ?? null;

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
        <Row gutter={15} justify="start">
          <Col span={14}>
            <Title level={4}>{astronaut.name}</Title>
            <Text style={{ display: 'block' }}>
              {t('birthday')}
              {format(
                parse(astronaut.date_of_birth, 'yyyy-MM-dd', new Date()),
                'dd.MM.yyyy',
              )}
            </Text>
            <Text>
              {t('age', { years: astronaut.age })}
              {/* Age: {astronaut.age} years */}
            </Text>
          </Col>
          <Col span={10}>
            <Image width={150} src={astronaut.profile_image} />
          </Col>
          <Divider />
          <Text>{astronaut.bio}</Text>
          <Divider />
          <Text>
            <Trans
              i18nKey="astronaut_more_info"
              t={t}
              components={[<Link to={astronaut.wiki} key={astronaut.id} />]}
            />
          </Text>
        </Row>
      )}
    </Modal>
  );
};
