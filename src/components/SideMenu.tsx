import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/#active-astronauts">Active Astronauts</Link>,
    key: '1',
  },
  {
    label: <Link to="/#retired-astronauts">Retired Astronauts</Link>,
    key: '2',
  },
  {
    label: <Link to="/#currently-in-space">Currently in Space</Link>,
    key: '3',
  },
];

export const SideMenu = () => {
  return <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />;
};
