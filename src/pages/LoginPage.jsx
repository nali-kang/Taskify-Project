import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginInput from '../components/LoginInput/LoginInput';

const SignIn = () => {
  return (
    <StSignInContainer>
      <div className="container__box">
        <h1>
          <Link to="/">
            <img src="/src/assets/image/logos/largeLogo.svg" alt="랜딩 페이지로 이동하려면 클릭" />
          </Link>
        </h1>
        <h3>오늘도 만나서 반가워요!</h3>
        <form>
          <LoginInput
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해 주세요."
            label="이메일"
          />
          <LoginInput
            id="password"
            name="password"
            type="password"
            password
            placeholder="비밀번호를 입력해 주세요."
            label="비밀번호"
          />
        </form>
        <h5>
          회원이 아니신가요? <Link to="/signup">회원가입하기</Link>
        </h5>
      </div>
    </StSignInContainer>
  );
};

export default SignIn;

const StSignInContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 170px 0;
  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: black;
    margin-top: 10px;
  }
  .container__box {
    max-width: 520px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form {
    width: 100%;
    margin-top: 38px;
  }
  h5 {
    font-size: 1.6rem;
    font-weight: 400;
    color: black;
    margin-top: 26px;
    a {
      text-decoration: underline;
      color: violet;
    }
  }
`;
