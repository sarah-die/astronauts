import { Col, Divider, Image, Modal, Row, Spin, Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { searchParamAgencyState } from '../recoilState/atom';
import { useQuery } from '@tanstack/react-query';
import { getById } from '../services/agencies';
import { AgencyDetail } from '../types';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;

export const AgencyModal = () => {
  const [searchParamAgency, setSearchParamAgency] = useRecoilState(
    searchParamAgencyState,
  );

  const queryAgencies = useQuery({
    queryKey: ['agencies', searchParamAgency],
    queryFn: () => getById(searchParamAgency),
  });

  const agency: AgencyDetail = queryAgencies.data || {};

  return (
    <>
      <Modal
        title={agency.abbrev}
        centered
        open={!!searchParamAgency}
        onCancel={() => setSearchParamAgency(null)}
        footer={null}
      >
        {queryAgencies.status === 'loading' ? (
          <Row justify="center">
            <Spin />
          </Row>
        ) : (
          <>
            <Row gutter={15}>
              <Col span={14}>
                <Title level={4}>{agency.name}</Title>
                <Text>Founded in {agency.founding_year}</Text>
              </Col>
              <Col span={10}>
                <Image width={150} src={agency.logo_url} />
              </Col>
            </Row>
            <Divider></Divider>
            <Text>{agency.description}</Text>
            {agency.image_url !== null && (
              <>
                <Divider></Divider>
                <Row justify="center">
                  <Image width={300} src={agency.image_url} />
                </Row>
              </>
            )}
            <Divider></Divider>
            <Text>
              Click <Link to={agency.info_url || ''}>here</Link> for more
              information.
            </Text>
          </>
        )}
      </Modal>
    </>
  );
};
