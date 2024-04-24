import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useGetRequest } from '@hooks/useRequest';
import { ReactComponent as ArrowRight } from '@icon/arrow_right.svg';
import PaginationArrow from '@components/common/PaginationArrow';
import useBooleanState from '../../hooks/useBooleanState';
import BaseModal from '../common/Modal';
import SelectColorButton from '../common/SelectColorButton';
import { useMutationRequest } from '../../hooks/useRequest';

const DASHBOARD_SIZE = 5;

const DashboardList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [isModalOpen, openModal, closeModal] = useBooleanState();
  const [color, setColor] = useState('');

  const { data, request } = useGetRequest({
    requestPath: '/dashboards',
    queryKey: 'dashboards',
  });

  const changePage = useCallback((page) => {
    setPage(page);
  }, []);

  useEffect(() => {
    request({ navigationMethod: 'pagination', page, size: DASHBOARD_SIZE });
  }, [page]);

  // modal setting
  const [modalInput, setModalInput] = useState('');

  const {
    request: dashboardRequest,
    isSuccess: dashboardIsSuccess,
    isError: dashboardIsError,
    error: dashboardError,
  } = useMutationRequest({
    requestPath: `/dashboards`,
    queryKey: ['dashboard', 'create'],
    method: 'POST',
  });

  const sendInvite = useCallback(() => {
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
      setPage(1);
      request({ navigationMethod: 'pagination', page: 1, size: DASHBOARD_SIZE });
      setColor('');
      setModalInput('');
      closeModal();
    }
    if (dashboardIsError) {
      alert(dashboardError?.response?.data?.message ?? '오류가 발생했습니다.');
    }
  }, [dashboardIsSuccess, dashboardIsError]);

  return (
    <DashboardContainer>
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
            <button className="invite_button" onClick={sendInvite}>
              생성
            </button>
          </ButtonArea>
        </Container>
      </BaseModal>
      <DashboardArticle>
        <DashboardCard className="new_card" onClick={openModal}>
          새로운 대시보드 <img src="/src/assets/icon/dashboard_add_icon.svg" />
        </DashboardCard>
        {data?.dashboards !== null && data?.dashboards !== undefined ? (
          data.dashboards?.map((e, i) => {
            return (
              <DashboardCard
                key={e.id + ' ' + i}
                className="dashboard"
                onClick={() => {
                  navigate(`/dashboard/${e.id}`);
                }}
                color={e.color}
              >
                <p className="dashboard_title">
                  <img className="dot" />
                  {e.title}
                  {e.createdByMe ? <img src="/src/assets/icon/crown_icon.svg" /> : <></>}
                </p>
                <ArrowRight fill={'black'} />
              </DashboardCard>
            );
          })
        ) : (
          <></>
        )}
      </DashboardArticle>
      <PagingSection>
        <PaginationArrow
          page={page}
          size={DASHBOARD_SIZE}
          total={data?.totalCount ?? 0}
          changePage={changePage}
          showPageInfo={true}
        />
      </PagingSection>
    </DashboardContainer>
  );
};

export default DashboardList;

const DashboardContainer = styled.article`
  width: 63.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.75rem;
`;
const DashboardArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.75rem;
  width: 63.875rem;
`;
const DashboardCard = styled.button`
  width: 20.75rem;
  height: 4.375rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray_D9};
  background: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  &.new_card {
    justify-content: center;
    img {
      margin-left: 0.75rem;
      display: flex;
      width: 1.375rem;
      height: 1.375rem;
      padding: 0.1875rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      background: ${({ theme }) => theme.color.violet_8p};
    }
  }
  &.dashboard {
    justify-content: space-between;
    .dashboard_title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 100%;
      margin-right: 0.5rem;
      border: 0;
      background-color: ${(props) => props.color};
    }
  }
  color: ${({ theme }) => theme.color.black_33};
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
`;
const PagingSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Container = styled.div`
  width: 33.75rem;
  height: 20.875rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem 1.75rem 1.75rem 1.75rem;
  .modal_title {
    color: ${({ theme }) => theme.color.black_33};
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const InputArea = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  strong {
    color: ${({ theme }) => theme.color.black_33};
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
`;
const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
  margin-top: 1.75rem;
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
