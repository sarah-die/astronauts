import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SideMenu = () => {
  const { t } = useTranslation(['layout']);

  const items = [
    {
      label: <Link to="/#active-astronauts">{t('active')}</Link>,
      key: '1',
    },
    {
      label: <Link to="/#retired-astronauts">{t('retired')}</Link>,
      key: '2',
    },
    {
      label: <Link to="/#currently-in-space">{t('inSpace')}</Link>,
      key: '3',
    },
  ];

  return <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />;
};
