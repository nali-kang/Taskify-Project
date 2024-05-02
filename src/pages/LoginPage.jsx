import styled from 'styled-components';
import SignIn from '../components/SignIn/SignIn';

const LoginPage = () => {
  return (
    <LoginPageContents>
      <SignIn />
    </LoginPageContents>
  );
};

export default LoginPage;

const LoginPageContents = styled.main`
  width: 100vw;
  min-height: 100%;
  font-size: 62.5% !important;
`;
