import { Table, Typography } from 'antd';
import { Astronaut } from '../types';
import { ColumnProps } from 'antd/es/table';
const { Title } = Typography;

export const AstronautTable = (props: {
  dataSource: Astronaut[] | undefined;
  dataTitle: string;
}) => {
  const uniqueAgencyProps: string[] = Array.from(
    new Set(props.dataSource?.map((item) => item.agency_abbrev)),
  );
  const agencyFilters: { text: string; value: string }[] =
    uniqueAgencyProps.map((item) => ({ text: item, value: item }));

  const uniqueNationalityProps: string[] = Array.from(
    new Set(props.dataSource?.map((item) => item.nationality)),
  );

  const nationalityFilters: { text: string; value: string }[] =
    uniqueNationalityProps.map((item) => ({ text: item, value: item }));

  const colums: ColumnProps<Astronaut>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      defaultSortOrder: 'ascend',
      sorter: {
        compare: (a: Astronaut, b: Astronaut) => a.name.localeCompare(b.name),
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: {
        compare: (a: Astronaut, b: Astronaut) => a.age - b.age,
      },
    },
    {
      title: 'Agency',
      dataIndex: 'agency_abbrev',
      key: 'agency_abbrev',
      filters: agencyFilters,
      onFilter: (value: string | number | boolean, record: Astronaut) =>
        record.agency_abbrev === value,
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
      filters: nationalityFilters,
    },
    {
      title: 'Flights Count',
      dataIndex: 'flights_count',
      key: 'flights_count',
      sorter: {
        compare: (a: Astronaut, b: Astronaut) =>
          a.flights_count - b.flights_count,
      },
    },
    {
      title: 'Spacewalks Count',
      dataIndex: 'spacewalks_count',
      key: 'spacewalks_count',
      sorter: {
        compare: (a: Astronaut, b: Astronaut) =>
          a.spacewalks_count - b.spacewalks_count,
      },
    },
  ];
  return (
    <>
      <Title level={3}>{props.dataTitle}</Title>
      <Table dataSource={props.dataSource} columns={colums}></Table>
    </>
  );
};
