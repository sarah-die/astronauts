import { Image, Modal, Typography } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalOpenState, searchParamAgencyState } from '../recoilState/atom';
import { useQuery } from '@tanstack/react-query';
import { getById } from '../services/agencies';
import { AgencyDetail } from '../types';
const { Title } = Typography;

export const AgencyModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const searchParamAgency = useRecoilValue(searchParamAgencyState);

  const queryAgencies = useQuery({
    queryKey: ['agencies', searchParamAgency],
    queryFn: () => getById(searchParamAgency),
  });

  const agency: AgencyDetail | undefined = queryAgencies.data;
  // console.log('agency inside Modal', agency);

  return (
    <>
      <Modal
        title={agency?.abbrev}
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        {queryAgencies.status === 'loading' ? (
          <>is loading...</>
        ) : (
          <>
            <Title level={4}>{agency?.name}</Title>
            <Image width={200} src={agency?.logo_url} />
          </>
        )}
      </Modal>
    </>
  );
};
