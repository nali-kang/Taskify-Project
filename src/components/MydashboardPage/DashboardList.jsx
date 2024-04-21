import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGetRequest } from '@hooks/useRequest';
import { ReactComponent as ArrowRight } from '@icon/arrow_right.svg';
import PaginationArrow from '@components/common/PaginationArrow';

const DASHBOARD_SIZE = 5;

const DashboardList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

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
      <DashboardArticle>
        <DashboardCard className="new_card">
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
  border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
  background: var(--white-white_FFFFFF, #fff);
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
      background: var(--violet-violet-8, #f1effd);
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
