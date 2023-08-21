import { Table, Typography } from 'antd';
import { Astronaut } from '../types';
const { Title } = Typography;

export const AstronautTable = (props: {
  dataSource: Astronaut[] | undefined;
  dataTitle: string;
}) => {
  const colums = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Agency',
      dataIndex: 'agency_abbrev',
      key: 'agency_abbrev',
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
    },
    {
      title: 'Flights Count',
      dataIndex: 'flights_count',
      key: 'flights_count',
    },
    {
      title: 'Spacewalks Count',
      dataIndex: 'spacewalks_count',
      key: 'spacewalks_count',
    },
  ];
  return (
    <>
      <Title level={3}>{props.dataTitle}</Title>
      <Table dataSource={props.dataSource} columns={colums}></Table>
    </>
  );
};
