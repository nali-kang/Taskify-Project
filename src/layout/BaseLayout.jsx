import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../components/common/HeaderLogo';

const Header = () => {
  return <HeaderContainer>header</HeaderContainer>;
};

const Sidebar = () => {
  return (
    <NavbarContainer>
      <HeaderLogo color={'#5534DA'} />
    </NavbarContainer>
  );
};

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

const HeaderContainer = styled.header`
  position: fixed;
  width: calc(100vw - 18.75rem);
  height: 4.38rem;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.white};
  @media (max-width: 743px) {
    width: calc(100vw - 4.1875rem);
    height: 3.75rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    width: calc(100vw - 10rem);
  }
`;
const NavbarContainer = styled.nav`
  position: fixed;
  width: 18.75rem;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.white};
  @media (max-width: 743px) {
    width: 4.1875rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    width: 10rem;
  }
`;
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
