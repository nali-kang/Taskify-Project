import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../../common/apis/users';

// 프로필 정보 가져오기
const useProfile = () => {
  return useQuery({
    queryKey: ['myProfile'],
    queryFn: getMyProfile, // API 호출 함수를 직접 참조
  });
};

export { useProfile };
