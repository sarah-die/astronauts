import { Button, Table, Typography } from 'antd';
import { ColumnProps, TablePaginationConfig } from 'antd/es/table';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  astronautLoadingState,
  currentAstronautIdState,
  searchParamAgencyState,
} from 'recoilState/atom';
import { AgencyModal } from './AgencyModal';
import { Astronaut, Agency } from 'types';
import { AstronautModal } from './AstronautModal';
import { useTranslation } from 'react-i18next';
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
  const [currentAstronautId, setCurrentAstronautId] = useRecoilState(
    currentAstronautIdState,
  );

  const { t } = useTranslation();

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

  const handleAstronautClick = (astronautName: string) => () => {
    const astronautId =
      dataSource?.find((el) => el.name === astronautName)?.id ?? null;
    setCurrentAstronautId(astronautId);
  };

  const handleAgencyClick = (agencyId: number) => () => {
    setSearchParamAgency(agencyId);
  };

  const colums: ColumnProps<Astronaut>[] = [
    {
      title: t('t_name'),
      dataIndex: 'name',
      key: 'name',
      defaultSortOrder: 'ascend',
      render: (text: string) => (
        <Button onClick={handleAstronautClick(text)}>{text}</Button>
      ),
      sorter: {
        compare: (a: Astronaut, b: Astronaut) => a.name.localeCompare(b.name),
      },
      fixed: 'left',
      width: 70,
    },
    {
      title: t('t_age'),
      dataIndex: 'age',
      key: 'age',
      sorter: {
        compare: (a: Astronaut, b: Astronaut) => a.age - b.age,
      },
      width: 30,
    },
    {
      title: t('t_agency'),
      dataIndex: 'agency',
      key: 'agency',
      render: (agency: Agency) => (
        <Button onClick={handleAgencyClick(agency.id)}>{agency.abbrev}</Button>
      ),
      filters: agencyFilters,
      onFilter: (value: string | number | boolean, record: Astronaut) =>
        record.agency.abbrev.startsWith(value.toString()),
      width: 70,
    },
    {
      title: t('t_nationality'),
      dataIndex: 'nationality',
      key: 'nationality',
      filters: nationalityFilters,
      onFilter: (value: string | number | boolean, record: Astronaut) =>
        record.nationality.startsWith(value.toString()),
      width: 70,
    },
    {
      title: t('t_flights_count'),
      dataIndex: 'flights_count',
      key: 'flights_count',
      sorter: {
        compare: (a: Astronaut, b: Astronaut) =>
          a.flights_count - b.flights_count,
      },
      width: 30,
    },
    {
      title: t('t_spacewalks_count'),
      dataIndex: 'spacewalks_count',
      key: 'spacewalks_count',
      sorter: {
        compare: (a: Astronaut, b: Astronaut) =>
          a.spacewalks_count - b.spacewalks_count,
      },
      width: 30,
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
        scroll={{
          x: 'max-content',
        }}
      ></Table>
      {searchParamAgency && <AgencyModal />}
      {currentAstronautId && <AstronautModal />}
    </>
  );
};
