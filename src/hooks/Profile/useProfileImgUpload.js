import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postProfileImgUpload } from '../../common/apis/users';

// 프로필 이미지 업로드
const useProfileImgUpload = () => {
  const [serverImgUrl, setServerImgUrl] = useState('');

  return useMutation({
    mutationFn: async (profileImgUrl) => {
      return postProfileImgUpload({
        profileImgUrl: profileImgUrl,
      });
    },
    onSuccess: (data) => {
      if (data.data && data.data.profileImgUrl !== serverImgUrl) {
        setServerImgUrl(data.data.profileImgUrl);
      }
    },
  });
};

export { useProfileImgUpload };
