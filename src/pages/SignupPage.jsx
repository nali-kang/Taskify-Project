import styled from 'styled-components';
import SignUp from '../components/SignUp/SignUp';

const SignUpPage = () => {
  return (
    <SignupPageContents>
      <SignUp />
    </SignupPageContents>
  );
};

export default SignUpPage;

const SignupPageContents = styled.main`
  width: 100vw;
  min-height: 100%;
  font-size: 62.5% !important;
`;
