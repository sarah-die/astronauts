import { Col, Image, Menu, Row, Segmented, Switch } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { darkModeState, languageState, currPathState } from 'recoilState/atom';
import { useTranslation } from 'react-i18next';
import { defaultLanguages } from 'locale/config';
import { useEffect } from 'react';

export const GlobalHeader = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [language, setLanguage] = useRecoilState(languageState);
  const [currPath, setCurrPath] = useRecoilState(currPathState);
  const { i18n } = useTranslation();
  const location = useLocation();

  const items = [
    {
      label: <Link to="/">{i18n.t('home')}</Link>,
      key: '',
    },
    {
      label: <Link to="/about">{i18n.t('about')}</Link>,
      key: 'about',
    },
    {
      label: <Link to="/contact">{i18n.t('contact')}</Link>,
      key: 'contact',
    },
  ];

  useEffect(() => {
    const path = location.pathname.slice(1);
    setCurrPath(path);
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
          defaultSelectedKeys={['']}
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
          checkedChildren={i18n.t('darkmode')}
          unCheckedChildren={i18n.t('lightmode')}
        />
      </Col>
    </Row>
  );
};
