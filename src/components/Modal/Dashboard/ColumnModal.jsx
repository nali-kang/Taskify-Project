import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useMutationRequest } from '../../../hooks/useRequest';
import BaseModal from '../../common/Modal';

const ColumnModal = ({ modalInfo, isModalOpen, onSuccess, closeModal }) => {
  // modal setting
  const [modalInput, setModalInput] = useState(modalInfo?.title ?? '');

  const { request, isSuccess, isError, error } = useMutationRequest({
    requestPath: `/columns/${modalInfo.id}`,
    queryKey: ['column', 'delete', modalInfo],
    method: 'DELETE',
  });

  useEffect(() => {
    setModalInput(modalInfo?.title ?? '');
  }, [modalInfo]);

  useEffect(() => {
    if (isSuccess) {
      alert('컬럼을 삭제했습니다.');
      closeModal();
    }
    if (isError) {
      alert(error?.response?.data?.message ?? '오류가 발생했습니다.');
    }
  }, [isSuccess, isError]);

  return (
    <BaseModal isOpen={isModalOpen}>
      <Container>
        <h1 className="modal_title">{modalInfo?.id ? '컬럼 관리' : '새 컬럼 생성'}</h1>
        <InputArea>
          <strong>이름</strong>
          <input onChange={(e) => setModalInput(e.target.value)} value={modalInput} />
        </InputArea>
        <BottomLayer between={modalInfo?.id ? true : false}>
          {modalInfo?.id ? (
            <button
              className="delete_button"
              onClick={() => {
                request();
              }}
            >
              삭제하기
            </button>
          ) : (
            <></>
          )}

          <ButtonArea>
            <button
              className="cancel_button"
              onClick={() => {
                //   setModalInput('');
                closeModal();
              }}
            >
              취소
            </button>
            <button
              className="invite_button"
              onClick={() => {
                onSuccess(modalInput);
              }}
            >
              {modalInfo?.id ? '변경' : '생성'}
            </button>
          </ButtonArea>
        </BottomLayer>
      </Container>
    </BaseModal>
  );
};

export default ColumnModal;

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
    margin: 0;
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

const BottomLayer = styled.article`
  display: flex;
  justify-content: ${(props) => (props.between ? 'space-between' : 'flex-end')};
  align-items: center;
  @media (max-width: 743px) {
    margin-top: ${(props) => (props.between ? '-1.125rem' : '1.5rem')};
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
  }
  .delete_button {
    background-color: transparent;
    padding: 0;
    color: var(--gray-gray_9FA6B2, #9fa6b2);
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    &:focus-visible,
    &:focus,
    &:hover {
      outline: none;
      border-color: transparent;
    }
  }
`;
const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
  @media (max-width: 743px) {
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
