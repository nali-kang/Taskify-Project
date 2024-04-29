import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';
import HeaderLogo from '@components/common/HeaderLogo';
import useBooleanState from '../../hooks/useBooleanState';
import { useGetRequest } from '../../hooks/useRequest';
import PaginationArrow from '../common/PaginationArrow';
import AddDashboardModal from '../Modal/Dashboard/AddDashboardModal';

const DASHBOARD_SIZE = 10;

const Sidebar = () => {
  const navigate = useNavigate();
  const { dashboardid } = useParams();
  const [page, setPage] = useState(1);
  const [isModalOpen, openModal, closeModal] = useBooleanState();

  const { data, request } = useGetRequest({
    requestPath: '/dashboards',
    queryKey: ['dashboards', 'sidebar'],
  });

  const changePage = useCallback((page) => {
    setPage(page);
  }, []);

  useEffect(() => {
    request({ navigationMethod: 'pagination', page, size: DASHBOARD_SIZE });
  }, [page, isModalOpen, navigate]);

  // eslint-disable-next-line no-unused-vars
  const handleDashboardClick = (dashboardId) => navigate(`/dashboard/${dashboardId}`);

  return (
    <Div>
      <AddDashboardModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <HeaderLogo color={'#5534DA'} />
      <DashboardList>
        <ItemDiv className="add_dashboard" onClick={openModal}>
          <AddText>Dash Boards</AddText>
          <img className="add_dashboard_button" src="/src/assets/icon/add_box.png" />
        </ItemDiv>
        {data?.dashboards?.map((dashboard) => (
          <ItemDiv
            $active={dashboard.id === Number(dashboardid)}
            key={dashboard.id}
            onClick={() => handleDashboardClick(dashboard.id)}
          >
            <CircleColor color={dashboard.color} />
            <Item $active={dashboard.id === Number(dashboardid)}>
              <span>{dashboard.title}</span>
              {dashboard.createdByMe && (
                <img className="crown" src="/src/assets/icon/crown_icon.svg" alt="created by me" />
              )}
            </Item>
          </ItemDiv>
        ))}
      </DashboardList>

      <PagingArea>
        <PaginationArrow
          page={page}
          size={DASHBOARD_SIZE}
          total={data?.totalCount}
          changePage={changePage}
        />
      </PagingArea>
    </Div>
  );
};

const Div = styled.div`
  position: fixed;
  width: 18.75rem;
  min-height: 100vh;
  top: 0;
  left: 0;
  padding: 1.25rem 0.75rem;
  border-right: 1px solid ${({ theme }) => theme.color.gray_D9};
  background-color: ${({ theme }) => theme.color.white};
  ${MEDIA_QUERIES.onTablet} {
    width: 10rem;
    padding: 0.56rem 0.75rem;
  }
  ${MEDIA_QUERIES.onMobile} {
    width: 4.1875rem;
    padding: 1.25rem 0.81rem;
  }
`;
const DashboardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.375rem 0;

  ${MEDIA_QUERIES.onMobile} {
    /* padding: 3.56rem 0.81rem 1.94rem; */
  }
`;

const AddText = styled.span`
  line-height: normal;
  color: ${({ theme }) => theme.color.gray_78};

  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;

  ${MEDIA_QUERIES.onMobile} {
    display: none;
  }
`;

const ItemDiv = styled.button`
  width: 100%;
  height: 2.8125rem;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border: none;
  background-color: ${({ $active, theme }) => ($active ? theme.color.violet_8p : 'transparent')};
  &:focus,
  &:focus-visible {
    outline: none;
    border: none;
  }
  &:hover {
    border-radius: 0.25rem;
    background: var(--violet-violet-8, #f1effd);
    transition: all 0.1s ease-in-out;
  }
  &.add_dashboard {
    justify-content: space-between;
  }

  ${MEDIA_QUERIES.onTablet} {
    height: 2.6875rem;
  }
  ${MEDIA_QUERIES.onMobile} {
    width: 2.5rem;
    height: 2.5rem;
    &.add_dashboard {
      justify-content: center;
    }
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: normal;

  ${MEDIA_QUERIES.onTablet} {
    font-size: 1rem;
  }
  ${MEDIA_QUERIES.onMobile} {
    display: none;
  }

  span {
    color: ${({ $active, theme }) => ($active ? theme.color.black_33 : theme.color.gray_78)};
    max-width: 12.75rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${MEDIA_QUERIES.onTablet} {
      max-width: 4.375rem;
    }
  }
  .crown {
    ${MEDIA_QUERIES.onTablet} {
      width: 1.09938rem;
      height: 0.875rem;
    }
  }
`;

const CircleColor = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  margin-right: 0.5rem;
  border: 0;
  background-color: ${(props) => props.color};
  ${MEDIA_QUERIES.onMobile} {
    margin: 0 auto;
  }
`;

const PagingArea = styled.div`
  position: fiexd;
  bottom: 1.75rem;
  left: 0.75rem;
  ${MEDIA_QUERIES.onMobile} {
    display: none;
  }
`;
export default Sidebar;
