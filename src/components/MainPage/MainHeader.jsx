import styled from 'styled-components';
import HeaderLogo from '@components/common/HeaderLogo';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <Header>
      <HeaderLogo className="header_logo" color={'#fff'} />
      <HeaderAuthDiv>
        <Link to={'/login'}>로그인</Link>
        <Link to={'/signup'}>회원가입</Link>
      </HeaderAuthDiv>
    </Header>
  );
};

export default MainHeader;

const Header = styled.header`
  background-color: ${({ theme }) => theme.color.black_00};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4.375rem;
  flex-shrink: 0;
  @media (max-width: 743px) {
    height: 3.75rem;
  }
  .header_logo {
    padding-left: 1rem;
  }
`;
const HeaderAuthDiv = styled.div`
  display: flex;
  gap: 2.25rem;
  padding-right: 5rem;
  & a {
    color: white;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (max-width: 743px) {
    gap: 1.25rem;
    padding-right: 1.5rem;
    & a {
      font-size: 0.875rem;
    }
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    padding-right: 2.5rem;
  }
`;
