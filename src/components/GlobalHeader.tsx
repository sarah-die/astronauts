import { Col, Image, Menu, Row, Segmented, Switch } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  darkModeState,
  languageState,
  currPathState,
} from 'src/recoilState/atom';
import { useTranslation } from 'react-i18next';
import { defaultLanguages } from 'src/i18n/config';
import { useEffect } from 'react';

export const GlobalHeader = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [language, setLanguage] = useRecoilState(languageState);
  const [currPath, setCurrPath] = useRecoilState(currPathState);
  const { i18n, t } = useTranslation(['layout']);
  const location = useLocation();

  console.log('curr', currPath);

  const items = [
    {
      label: <Link to="/">{t('home')}</Link>,
      key: '1',
    },
    {
      label: <Link to="/about">{t('about')}</Link>,
      key: '2',
    },
    {
      label: <Link to="/contact">{t('contact')}</Link>,
      key: '3',
    },
  ];

  useEffect(() => {
    const path = location.pathname.slice(1);

    switch (path) {
      case '':
        setCurrPath('1');
        break;
      case 'about':
        setCurrPath('2');
        break;
      case 'contact':
        setCurrPath('3');
        break;
      default:
        break;
    }

    console.log('path', path);
  }, [location]);

  const handleSegmentedChange = (value: string) => {
    const newLngKey =
      defaultLanguages.find((item) => item.name === value)?.key || 'en';

    // ToDo
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(newLngKey);
    setLanguage(newLngKey);
  };

  return (
    <Row>
      <Col span={8}>
        <Menu
          mode="horizontal"
          selectedKeys={[currPath]}
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Col>
      <Col span={2} offset={8}>
        <Image
          width={30}
          src="https://loremicon.com/ngon/128/128/261847001528/jpg"
        />
      </Col>
      <Col span={2}>
        <Segmented
          options={defaultLanguages.map((lng) => lng.name)}
          defaultValue={
            defaultLanguages.find((lng) => lng.key === language)?.name
          }
          onChange={(value) => handleSegmentedChange(value as string)}
        />
      </Col>
      <Col span={2} offset={2}>
        <Switch
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren={t('darkmode')}
          unCheckedChildren={t('lightmode')}
        />
      </Col>
    </Row>
  );
};
