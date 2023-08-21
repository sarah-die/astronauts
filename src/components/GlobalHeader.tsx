import { Col, Image, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';

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

export const GlobalHeader = () => {
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
        <Image
          width={30}
          src="https://loremicon.com/ngon/128/128/261847001528/jpg"
        />
      </Col>
    </Row>
  );
};
