import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useMutationRequest } from '../../../hooks/useRequest';
import BaseModal from '../../common/Modal';

const InviteMemberModal = ({ isOpen, closeModal, id, onSuccess }) => {
  // modal setting
  const [modalInput, setModalInput] = useState('');

  const {
    request: inviteRequest,
    isSuccess: inviteIsSuccess,
    isError: inviteIsError,
    error: inviteError,
  } = useMutationRequest({
    requestPath: `/dashboards/${id}/invitations`,
    queryKey: ['dashboard', 'invitations', id],
    method: 'POST',
  });

  const sendInvite = useCallback(() => {
    if (modalInput === '') {
      alert('이메일을 입력해주세요.');
    } else {
      inviteRequest({ email: modalInput });
    }
  });

  useEffect(() => {
    if (inviteIsSuccess) {
      onSuccess();
      setModalInput('');
      closeModal();
    }
    if (inviteIsError) {
      alert(inviteError?.response?.data?.message ?? '오류가 발생했습니다.');
    }
  }, [inviteIsSuccess, inviteIsError]);
  return (
    <BaseModal isOpen={isOpen}>
      <Container>
        <h1 className="modal_title">초대하기</h1>
        <InputArea>
          <strong>이메일</strong>
          <input onChange={(e) => setModalInput(e.target.value)} />
        </InputArea>
        <ButtonArea>
          <button
            className="cancel_button"
            onClick={() => {
              setModalInput('');
              closeModal();
            }}
          >
            취소
          </button>
          <button className="invite_button" onClick={sendInvite}>
            초대
          </button>
        </ButtonArea>
      </Container>
    </BaseModal>
  );
};

export default InviteMemberModal;

const Container = styled.div`
  width: 33.75rem;
  height: 17.25rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  padding: 2rem 1.75rem 1.75rem 1.75rem;
  @media (max-width: 743px) {
    width: 20.4375rem;
    height: 15.0625rem;
    padding: 1.75rem 1.25rem;
  }
  .modal_title {
    color: ${({ theme }) => theme.color.black_33};
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 743px) {
      font-size: 1.25rem;
    }
  }
`;

const InputArea = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  @media (max-width: 743px) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  strong {
    color: ${({ theme }) => theme.color.black_33};
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 743px) {
      font-size: 1rem;
    }
  }
  input {
    color: ${({ theme }) => theme.color.black_33};
    width: 30.25rem;
    height: 3rem;
    padding: 0 1rem;
    flex-shrink: 0;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9};
    background: ${({ theme }) => theme.color.white};
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 743px) {
      width: 17.9375rem;
      height: 2.625rem;
      font-size: 0.875rem;
    }
  }
`;

const buttonLayout = css`
  display: flex;
  width: 7.5rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 743px) {
    width: 8.625rem;
    height: 2.625rem;
    font-size: 0.875rem;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
  @media (max-width: 743px) {
    margin-top: 1.5rem;
    gap: 0.69rem;
  }
  .cancel_button {
    ${buttonLayout};
    border: 1px solid ${({ theme }) => theme.color.gray_D9};
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.gray_78};
  }
  .invite_button {
    ${buttonLayout};
    background: ${({ theme }) => theme.color.violet};
    color: ${({ theme }) => theme.color.white};
  }
`;
