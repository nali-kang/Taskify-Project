import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useMutationRequest } from '../../../hooks/useRequest';
import BaseModal from '../../common/Modal';
import SelectColorButton from '../../common/SelectColorButton';

const AddDashboardModal = ({ isModalOpen, closeModal }) => {
  const navigate = useNavigate();
  const [color, setColor] = useState('');
  const [modalInput, setModalInput] = useState('');

  useEffect(() => {
    setColor('');
    setModalInput('');
  }, []);

  const {
    data: dashboardData,
    request: dashboardRequest,
    isSuccess: dashboardIsSuccess,
    isError: dashboardIsError,
    error: dashboardError,
  } = useMutationRequest({
    requestPath: `/dashboards`,
    queryKey: ['dashboard', 'create'],
    method: 'POST',
  });

  const addDashboard = useCallback(() => {
    if (modalInput === '') {
      alert('대시보드 제목을 입력해주세요.');
    } else if (color === '') {
      alert('색상을 선택해주세요.');
    } else {
      dashboardRequest({ title: modalInput, color });
    }
  });

  useEffect(() => {
    if (dashboardIsSuccess) {
      setColor('');
      setModalInput('');
      closeModal();
      navigate(`/dashboard/${dashboardData?.id}`);
    }
    if (dashboardIsError) {
      alert(dashboardError?.response?.data?.message ?? '오류가 발생했습니다.');
    }
  }, [dashboardIsSuccess, dashboardIsError]);

  return (
    <BaseModal isOpen={isModalOpen}>
      <Container>
        <h1 className="modal_title">새로운 대시보드</h1>
        <InputArea>
          <strong>대시보드 이름</strong>
          <input onChange={(e) => setModalInput(e.target.value)} />
        </InputArea>
        <SelectColorButton color={color} setColor={(c) => setColor(c)} />
        <ButtonArea>
          <button
            className="cancel_button"
            onClick={() => {
              setColor('');
              setModalInput('');
              closeModal();
            }}
          >
            취소
          </button>
          <button
            className="invite_button"
            onClick={() => {
              addDashboard(modalInput, color);
            }}
          >
            생성
          </button>
        </ButtonArea>
      </Container>
    </BaseModal>
  );
};

export default AddDashboardModal;

const Container = styled.div`
  width: 33.75rem;
  height: 20.875rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem 1.75rem 1.75rem 1.75rem;
  @media (max-width: 743px) {
    width: 20.4375rem;
    height: 18.3125rem;
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
const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
  margin-top: 1.75rem;

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
