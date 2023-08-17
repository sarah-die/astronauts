import { Menu } from 'antd';

function getItem(label: string, key: string) {
  return {
    key,
    label,
  };
}

const items = [
  getItem('Active Astronauts', '1'),
  getItem('Retired Atronauts', '2'),
  getItem('Currently in Space', '3'),
];

export const SideMenu = () => {
  return <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />;
};
