import { Col, Divider, Image, Modal, Row, Spin, Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { searchParamAgencyState } from 'recoilState/atom';
import { useQuery } from '@tanstack/react-query';
import { getById } from 'services/agencies';
import { AgencyDetail } from 'types';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
const { Title, Text } = Typography;

export const AgencyModal = () => {
  const [searchParamAgency, setSearchParamAgency] = useRecoilState(
    searchParamAgencyState,
  );

  const { t } = useTranslation();

  const queryAgency = useQuery({
    queryKey: ['agency', searchParamAgency],
    queryFn: () => getById(searchParamAgency),
  });

  const agency: AgencyDetail | null = queryAgency.data ?? null;

  return (
    <Modal
      title={agency?.abbrev}
      centered
      open={!!searchParamAgency}
      onCancel={() => setSearchParamAgency(null)}
      footer={null}
    >
      {!agency ? (
        <Row justify="center">
          <Spin />
        </Row>
      ) : (
        <>
          <Row gutter={15}>
            <Col span={14}>
              <Title level={4}>{agency.name}</Title>
              <Text>
                {t('founding_year')} {agency.founding_year}
              </Text>
            </Col>
            <Col span={10}>
              <Image width={150} src={agency.logo_url} />
            </Col>
          </Row>
          <Divider />
          <Text>{agency.description}</Text>
          {agency.image_url !== null && (
            <>
              <Divider />
              <Row justify="center">
                <Image width={300} src={agency.image_url} />
              </Row>
            </>
          )}
          <Divider />
          <Text>
            <Trans
              i18nKey="agency_more_info"
              t={t}
              components={[
                <Link to={agency.info_url || ''} key={agency.abbrev} />,
              ]}
            />
          </Text>
        </>
      )}
    </Modal>
  );
};
