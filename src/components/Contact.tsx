import { Col, Divider, Row, Typography, Image } from 'antd';
const { Text, Title } = Typography;

export const Contact = () => {
  return (
    <Row justify="space-evenly" align="middle">
      <Col span={8}>
        <Title level={3}>Contact</Title>
        <Divider orientation="left">GitHub</Divider>
        <Text>Lorem ipsum dolor sit.</Text>
        <Divider orientation="left">LinkedIn</Divider>
        <Text>Lorem ipsum dolor sit.</Text>
        <Divider orientation="left">E-Mail</Divider>
        <Text>Lorem ipsum dolor sit.</Text>
      </Col>
      <Col span={8}>
        <Image
          width={250}
          src="https://picsum.photos/id/998/200/300?grayscale"
        />
      </Col>
    </Row>
  );
};
