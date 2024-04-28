import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CircleColor from './CircleColor';
import useDashboardQuery from './useDashboardQuery';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';
import add_dashboard_icon from '../../assets/icon/add_dashboard_icon.png';
import prev_icon from '../../assets/icon/prev_icon.png';
import next_icon from '../../assets/icon/next_icon.png';
import crown from '../../assets/icon/crown.png';
import logo_icon from '../../assets/icon/logo_icon.png';
import logo_text from '../../assets/icon/logo_text.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { data } = useDashboardQuery({
    navigationMethod: 'pagination',
    page,
    size: 8,
  });

  const dashboards = data?.dashboards;
  const totalPages = Math.ceil(data?.totalCount / 8);

  const handlePrevBtnClick = () => setPage((prev) => Math.max(1, prev - 1));
  const handleNextBtnClick = () => setPage((prev) => Math.min(totalPages, prev + 1));

  const handleLogoClick = () => navigate('/');

  // eslint-disable-next-line no-unused-vars
  const handleDashboardClick = (dashboardId) => navigate(`/dashboard/${dashboardId}`);

  const handleAddDashBoardClick = () => navigate('/mydashboard');

  return (
    <Div>
      <Logo onClick={handleLogoClick}>
        <img src={logo_icon} alt="Logo" style={{ width: '29px', height: '33px' }} />
        <img src={logo_text} alt="Logo Text" style={{ width: '80px', height: '22px' }} />
      </Logo>
      <AddDashBoard>
        <AddText>Dash Boards</AddText>
        <img
          src={add_dashboard_icon}
          alt="add dashboard"
          // eslint-disable-next-line no-console
          onClick={handleAddDashBoardClick}
          style={{ width: '20px', height: '20px' }}
        />
      </AddDashBoard>
      <ul>
        {dashboards?.map((dashboard) => (
          <ItemDiv key={dashboard.id} onClick={() => handleDashboardClick(dashboard.id)}>
            <CircleColor color={dashboard.color} />
            <Item $active={dashboard.id === navigate.query.dashboardId}>
              {dashboard.createdByMe && <img src={crown} alt="created by me" />} &nbsp;
              {dashboard.title}
            </Item>
          </ItemDiv>
        ))}
      </ul>
      <PageNavigation>
        <Buttons>
          <ArrowButton disabled={page <= 1} onClick={handlePrevBtnClick}>
            <img src={prev_icon} alt="previous icon" />
          </ArrowButton>
          <ArrowButton disabled={page >= totalPages} onClick={handleNextBtnClick}>
            <img src={next_icon} alt="next icon" />
          </ArrowButton>
        </Buttons>
      </PageNavigation>
    </Div>
  );
};

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 16.5rem;
  height: 100vh;
  padding: 0.687rem 0.825rem;
  border-right: 1px solid ${({ theme }) => theme.color.gray_D9};
  background-color: ${({ theme }) => theme.color.white};
  ${MEDIA_QUERIES.onTablet} {
    width: 8.8rem;
  }
  ${MEDIA_QUERIES.onMobile} {
    width: 3.685rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.06rem;
  cursor: pointer;
  ${MEDIA_QUERIES.onMobile} {
    margin-left: 0.345rem;
  }
`;

const AddDashBoard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.43rem;

  img {
    margin-left: auto;
    cursor: pointer;
  }
`;

const AddText = styled.span`
  padding-top: 1.65%;
  color: ${({ theme }) => theme.color.gray_9F};
  margin-right: 5.225rem;
  margin-left: 0.385rem;
  font-size: 0.8rem;
  font-weight: 700;
  ${MEDIA_QUERIES.onTablet} {
    margin-right: 1.925rem;
    margin-top: 0.247rem;
  }
  ${MEDIA_QUERIES.onMobile} {
    display: none;
  }
`;

const ItemDiv = styled.div`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 50.181rem;
  height: 2.117rem;
  display: inline-block;
  align-items: center;
  margin-top: 0.467rem;
  padding: 5.5px;
  cursor: pointer;

  &:hover {
    border-radius: 0.55rem;
    background: var(--violet-violet-8, #f1effd);
    transition: all 0.1s ease-in-out;
  }
  ${MEDIA_QUERIES.onTablet} {
    max-width: 7.37rem;
  }
`;

const Item = styled.li`
  overflow: hidden;
  margin-left: 0.728rem;
  color: ${({ theme }) => theme.color.gray_78};
  font-size: 0.783rem;
  font-weight: 500;
  ${({ $active }) => $active && `font-weight: bold;`}
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  ${MEDIA_QUERIES.onMobile} {
    display: none;
  }
`;
const PageNavigation = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(-1rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 6.6rem;
  ${MEDIA_QUERIES.onMobile} {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.1rem;
  padding: 0.66rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export default Sidebar;
