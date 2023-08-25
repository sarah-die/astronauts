import { Button, Table, Typography } from 'antd';
import { Agency, Astronaut } from '../types';
import { ColumnProps, TablePaginationConfig } from 'antd/es/table';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  astronautLoadingState,
  searchParamAgencyState,
} from '../recoilState/atom';
import { AgencyModal } from './AgencyModal';
const { Title } = Typography;

type AstronautTableProps = {
  dataSource: Astronaut[] | undefined;
  dataTitle: string;
};

export const AstronautTable = ({
  dataSource,
  dataTitle,
}: AstronautTableProps) => {
  const astronautLoading = useRecoilValue(astronautLoadingState);
  const [searchParamAgency, setSearchParamAgency] = useRecoilState(
    searchParamAgencyState,
  );

  const uniqueAgencyAbbrevs: string[] = Array.from(
    new Set(dataSource?.map((item) => item.agency.abbrev)),
  );
  const agencyFilters: { text: string; value: string }[] =
    uniqueAgencyAbbrevs.map((item) => ({ text: item, value: item }));

  const uniqueNationalities: string[] = Array.from(
    new Set(dataSource?.map((item) => item.nationality)),
  );
  const nationalityFilters: { text: string; value: string }[] =
    uniqueNationalities.map((item) => ({ text: item, value: item }));

  const handleAgencyClick = (agencyId: number) => () => {
    setSearchParamAgency(agencyId);
  };

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
      dataIndex: 'agency',
      key: 'agency',
      render: (agency: Agency) => (
        <Button onClick={handleAgencyClick(agency.id)}>{agency.abbrev}</Button>
      ),
      filters: agencyFilters,
      onFilter: (value: string | number | boolean, record: Astronaut) =>
        record.agency.abbrev.indexOf(value.toString()) === 0,
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
      filters: nationalityFilters,
      onFilter: (value: string | number | boolean, record: Astronaut) =>
        record.nationality.indexOf(value.toString()) === 0,
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

  const pagination: TablePaginationConfig = {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 30],
  };

  const loading = {
    spinning: astronautLoading,
  };

  return (
    <>
      <Title level={3}>{dataTitle}</Title>
      <Table
        dataSource={dataSource}
        columns={colums}
        pagination={pagination}
        loading={loading}
      ></Table>
      {searchParamAgency && <AgencyModal />}
    </>
  );
};
