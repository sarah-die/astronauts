import { Col, Divider, Row, Typography, Image } from 'antd';
import { useTranslation } from 'react-i18next';
const { Text, Title, Link } = Typography;

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <Row justify="space-evenly" align="middle">
      <Col span={8}>
        <Image
          width={250}
          src="https://picsum.photos/id/998/200/300?grayscale"
        />
      </Col>
      <Col span={8}>
        <Title level={3}>{t('contact_title')}</Title>
        <Divider orientation="left">GitHub</Divider>
        <Link href="https://github.com/sarah-die">sarah-die</Link>
        <Divider orientation="left">LinkedIn</Divider>
        <Link href="https://www.linkedin.com/in/sdiethert/">sdiethert</Link>
        <Divider orientation="left">E-Mail</Divider>
        <Text>tba</Text>
      </Col>
    </Row>
  );
};
