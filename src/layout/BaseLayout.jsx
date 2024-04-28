import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Sidebar from '../components/sidebar/SideBar';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default BaseLayout;

const MainContainer = styled.main`
  padding-top: 4.38rem;
  padding-left: 18.75rem;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.gray_FA};
  @media (max-width: 743px) {
    padding-top: 3.75rem;
    padding-left: 4.1875rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    padding-left: 10rem;
  }
`;
