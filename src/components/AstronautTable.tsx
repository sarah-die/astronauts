import { Button, Table, Typography } from 'antd';
import { Agency, Astronaut } from '../types';
import { ColumnProps, TablePaginationConfig } from 'antd/es/table';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import {
  astronautLoadingState,
  modalOpenState,
  searchParamAgencyState,
} from '../recoilState/atom';
import { AgencyModal } from './AgencyModal';
const { Title } = Typography;

export const AstronautTable = (props: {
  dataSource: Astronaut[] | undefined;
  dataTitle: string;
}) => {
  const astronautLoading = useRecoilValue(astronautLoadingState);
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const setSearchParamAgency = useSetRecoilState(searchParamAgencyState);

  const uniqueAgencyProps: string[] = Array.from(
    new Set(props.dataSource?.map((item) => item.agency.abbrev)),
  );
  const agencyFilters: { text: string; value: string }[] =
    uniqueAgencyProps.map((item) => ({ text: item, value: item }));

  const uniqueNationalityProps: string[] = Array.from(
    new Set(props.dataSource?.map((item) => item.nationality)),
  );
  const nationalityFilters: { text: string; value: string }[] =
    uniqueNationalityProps.map((item) => ({ text: item, value: item }));

  const handleAgencyClick = (searchParam: string) => () => {
    setModalOpen(true);
    setSearchParamAgency(searchParam);
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
        <>
          <Button onClick={handleAgencyClick(agency.abbrev)}>
            {agency.abbrev}
          </Button>
        </>
      ),
      filters: agencyFilters,
      onFilter: (value: string | number | boolean, record: Astronaut) =>
        record.agency.abbrev === value,
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

  const pagination: TablePaginationConfig = {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 30],
  };

  const loading = {
    // indicator: <>is loading...</>,
    spinning: astronautLoading,
  };

  return (
    <>
      <Title level={3}>{props.dataTitle}</Title>
      <Table
        dataSource={props.dataSource}
        columns={colums}
        pagination={pagination}
        loading={loading}
      ></Table>
      {modalOpen && <AgencyModal></AgencyModal>}
    </>
  );
};
