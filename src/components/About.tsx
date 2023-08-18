import { Col, Divider, Image, Row, Typography } from 'antd';
const { Text, Title } = Typography;

export const About = () => {
  return (
    <Row justify="space-evenly" align="middle">
      <Col span={8}>
        <Title level={3}>About this Project</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          similique consequuntur quas velit accusantium modi expedita enim
          maiores aspernatur, harum facilis accusamus minima eaque! Ex eum optio
          sunt itaque illo?
        </Text>
        <Divider />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Col>
      <Col span={8}>
        <Image width={250} src="https://picsum.photos/id/538/200/300" />
      </Col>
    </Row>
  );
};
