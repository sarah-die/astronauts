import { Col, Image, Menu, Row, Segmented, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { darkModeState, languageState } from '../recoilState/atom';
import { useTranslation } from 'react-i18next';

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
  const [language, setLanguage] = useRecoilState(languageState);
  const { i18n } = useTranslation();

  const handleSegmentedChange = (value: string) => {
    const updatedLanguages = language.map((item) => {
      if (item.active === true) {
        return { ...item, active: false };
      } else if (item.name === value) {
        return { ...item, active: true };
      }
      return item;
    });

    // ToDo
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(language.find((item) => item.name === value)?.abbrev);
    setLanguage(updatedLanguages);
  };

  return (
    <Row>
      <Col span={8}>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} />
      </Col>
      <Col span={2} offset={8}>
        <Image
          width={30}
          src="https://loremicon.com/ngon/128/128/261847001528/jpg"
        />
      </Col>
      <Col span={2}>
        <Segmented
          options={language.map((lng) => lng.name)}
          onChange={(value) => handleSegmentedChange(value as string)}
        />
      </Col>
      <Col span={2} offset={2}>
        <Switch
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren="dark"
          unCheckedChildren="light"
        />
      </Col>
    </Row>
  );
};
