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
                  <span>{e.title}</span>
                  {e.createdByMe ? (
                    <img className="crown" src="/src/assets/icon/crown_icon.svg" />
                  ) : (
                    <></>
                  )}
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
  @media (max-width: 743px) {
    width: 16.25rem;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 744px) and (max-width: 1400px) {
    width: 31.5rem;
    gap: 0.62rem;
    margin-bottom: 2.5rem;
  }
`;
const DashboardArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.75rem;
  width: 63.875rem;
  @media (max-width: 743px) {
    width: 16.25rem;
    gap: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 744px) and (max-width: 1400px) {
    width: 31.5rem;
    gap: 0.62rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
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

  @media (max-width: 743px) {
    width: 16.25rem;
    height: 3.625rem;
  }

  @media (min-width: 744px) and (max-width: 1400px) {
    width: 15.4375rem;
    height: 4.25rem;
  }
  &.new_card {
    justify-content: center;
    @media (max-width: 743px) {
      font-size: 0.875rem;
    }
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
      @media (max-width: 743px) {
        width: 1.25rem;
        height: 1.25rem;
        padding: 0.17rem;
      }
    }
  }
  &.dashboard {
    justify-content: space-between;
    @media (max-width: 743px) {
      font-size: 0.875rem;
    }
    .dashboard_title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      @media (max-width: 743px) {
        gap: 0.25rem;
      }
      @media (min-width: 744px) and (max-width: 1400px) {
        gap: 0.25rem;
      }
    }
    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 100%;
      margin-right: 0.5rem;
      border: 0;
      background-color: ${(props) => props.color};
    }
    .crown {
      @media (max-width: 743px) {
        width: 0.94231rem;
        height: 0.75rem;
      }
      @media (min-width: 744px) and (max-width: 1400px) {
        width: 1.09938rem;
        height: 0.875rem;
      }
    }
    span {
      max-width: 14rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      @media (max-width: 743px) {
        max-width: 10rem;
      }
      @media (min-width: 744px) and (max-width: 1400px) {
        max-width: 8rem;
      }
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
  @media (max-width: 743px) {
    width: 20.4375rem;
    height: 18.3125rem;
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
