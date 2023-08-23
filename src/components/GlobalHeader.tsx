import { Col, Image, Menu, Row, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../recoilState/atom';

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
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  return (
    <Row>
      <Col span={10}>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} />
      </Col>
      <Col span={2} offset={10}>
        <Image
          width={30}
          src="https://loremicon.com/ngon/128/128/261847001528/jpg"
        />
      </Col>
      <Col span={2}>
        <Switch
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren="dark"
          unCheckedChildren="light"
        />
      </Col>
    </Row>
  );
};
