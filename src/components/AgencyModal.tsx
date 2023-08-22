// import { getSearch } from '../services/agencies';

import { Modal } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalOpenState, searchParamAgencyState } from '../recoilState/atom';

export const AgencyModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const searchParamAgency = useRecoilValue(searchParamAgencyState);

  // setSearchParamAgency('nasa');
  // // ToDo maybe as dependent query or refetchOnWindowFocus: false / enabled: false -> only fetch on click?!
  // const queryAgencies = useQuery({
  //   queryKey: ['agencies', searchParamAgency],
  //   queryFn: () => getSearch(searchParamAgency),
  // });
  // console.log('agency', queryAgencies.data);

  return (
    <>
      <Modal
        title={searchParamAgency}
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        {searchParamAgency}
      </Modal>
    </>
  );
};
