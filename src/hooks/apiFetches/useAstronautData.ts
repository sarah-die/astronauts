import { useQuery } from '@tanstack/react-query';
import { getAll } from 'services/astronauts';
import { astronautLoadingState } from 'recoilState/atom';
import { useSetRecoilState } from 'recoil';

export const useAstronautData = () => {
  const setAstronautLoading = useSetRecoilState(astronautLoadingState);

  return useQuery({
    queryKey: ['astronauts'],
    queryFn: getAll,
    onSuccess: () => {
      setAstronautLoading(false);
    },
  });
};
