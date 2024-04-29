import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putMyProfileEdit } from '../../common/apis/users';
import { useState } from 'react';

// 프로필 수정 => 이미지, 닉네임
const useProfileEdit = (imgServerUrl) => {
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      if (imgServerUrl) {
        setProfileImgUrl(imgServerUrl);
      }
      return putMyProfileEdit({
        nickname: data.nickname,
        profileImageUrl: imgServerUrl || profileImgUrl,
      });
    },
    onSuccess: () => {
      alert('성공');
      queryClient.invalidateQueries(['profile']);
    },
  });
};

export default useProfileEdit;
