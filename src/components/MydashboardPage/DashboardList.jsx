import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGetRequest } from '@hooks/useRequest';
import { ReactComponent as ArrowRight } from '@icon/arrow_right.svg';
import PaginationArrow from '@components/common/PaginationArrow';
import useBooleanState from '../../hooks/useBooleanState';
import AddDashboardModal from '../Modal/Dashboard/AddDashboardModal';

const DASHBOARD_SIZE = 5;

const DashboardList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [isModalOpen, openModal, closeModal] = useBooleanState();

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

  return (
    <DashboardContainer>
      <AddDashboardModal isModalOpen={isModalOpen} closeModal={closeModal} />
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
