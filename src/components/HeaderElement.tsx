import { Col, Menu, Row, Typography } from 'antd';
const { Title } = Typography;

function getItem(label: string, key: string) {
  return {
    key,
    label,
  };
}

const items = [
  getItem('Home', '1'),
  getItem('About', '2'),
  getItem('Contact', '3'),
];

export const HeaderElement = () => {
  return (
    <Row>
      <Col span={12}>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} />
      </Col>
      <Col span={4} offset={8}>
        <Title level={4} type="success">
          Logo
        </Title>
      </Col>
    </Row>
  );
};
