import { Col, Divider, Image, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
const { Text, Title } = Typography;

export const About = () => {
  const { t } = useTranslation();

  return (
    <Row justify="space-evenly" align="middle">
      <Col span={8}>
        <Title level={3}>{t('about_title')}</Title>
        <Text>{t('about_text_1')}</Text>
        <Divider />
        <Text>{t('about_text_2')}</Text>
      </Col>
      <Col span={8}>
        <Image width={250} src="https://picsum.photos/id/538/200/300" />
      </Col>
    </Row>
  );
};
