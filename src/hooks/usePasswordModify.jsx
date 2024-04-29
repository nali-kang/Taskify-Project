import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import instance from '../lib/axios';

// 비밀번호 변경 API 호출 함수
const putPasswordChange = ({ password, newPassword }) => {
  return instance({
    url: '/auth/password',
    method: 'PUT',
    data: {
      password,
      newPassword,
    },
  });
};
const usePasswordModify = () => {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const mutation = useMutation({
    mutationFn: async (data) => {
      return putPasswordChange({
        password: data.nowPassword,
        newPassword: data.newPassword,
      });
    },
    onSuccess: () => {
      alert('비밀번호가 변경되었습니다.');
    },
    onError: (error) => {
      setOpen(true);
      const message = error.response?.data?.message || '오류가 발생했습니다.';
      setModalMessage(message);
    },
  });

  return {
    ...mutation,
    open,
    setOpen,
    modalMessage,
  };
};

export default usePasswordModify;
