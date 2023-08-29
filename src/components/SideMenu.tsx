import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SideMenu = () => {
  const { i18n } = useTranslation();

  const items = [
    {
      label: <Link to="/#active-astronauts">{i18n.t('active')}</Link>,
      key: '1',
    },
    {
      label: <Link to="/#retired-astronauts">{i18n.t('retired')}</Link>,
      key: '2',
    },
    {
      label: <Link to="/#currently-in-space">{i18n.t('inSpace')}</Link>,
      key: '3',
    },
  ];

  return (
    <div
      style={{
        border: 'solid',
        borderWidth: 2,
        borderColor: 'green',
      }}
    >
      <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />
    </div>
  );
};
