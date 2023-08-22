// import { getSearch } from '../services/agencies';

import { Modal } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalOpenState, searchParamAgencyState } from '../recoilState/atom';
import { useQuery } from '@tanstack/react-query';
import { getById } from '../services/agencies';
import { AgencyDetail } from '../types';

export const AgencyModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const searchParamAgency = useRecoilValue(searchParamAgencyState);

  const queryAgencies = useQuery({
    queryKey: ['agencies', searchParamAgency],
    queryFn: () => getById(searchParamAgency),
  });

  const agency: AgencyDetail | undefined = queryAgencies.data;
  console.log('agency inside Modal', agency);

  return (
    <>
      <Modal
        title={searchParamAgency}
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        {searchParamAgency}
      </Modal>
    </>
  );
};
