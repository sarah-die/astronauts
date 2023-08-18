import { Col, Menu, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: '1',
  },
  {
    label: <Link to="/about">About</Link>,
    key: '2',
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: '3',
  },
];

export const HeaderElement = () => {
  return (
    <Row>
      <Col span={12}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ backgroundColor: '#E6F4FF' }}
        />
      </Col>
      <Col span={4} offset={8}>
        <Title level={4} type="success">
          Logo
        </Title>
      </Col>
    </Row>
  );
};
