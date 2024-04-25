import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput/LoginInput';
import FullButton from '../components/FullButton';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <StSignUpContainer>
      <div className="container__box">
        <h1>
          <Link to="/">
            <img src="/src/assets/images/largeLogo.svg" alt="랜딩 페이지로 이동하려면 클릭" />
          </Link>
        </h1>
        <h3>첫 방문을 환영합니다!</h3>
        <form>
          <LoginInput
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해 주세요."
            label="이메일"
          />
          <LoginInput
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해 주세요."
            label="닉네임"
          />
          <LoginInput
            id="password"
            name="password"
            type="password"
            password
            placeholder="8자 이상 입력해 주세요"
            label="비밀번호"
          />
          <LoginInput
            id="password"
            name="password"
            type="password"
            password
            placeholder="비밀번호를 한번 더 입력해 주세요"
            label="비밀번호 확인"
          />
          <div className="form__agreement-checkbox">
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree">이용약관에 동의합니다.</label>
          </div>
          <div className="form__submit-button">
            <FullButton disabled>가입하기</FullButton>
          </div>
        </form>
        <h5>
          이미 가입하셨나요? <Link to="/login">로그인하기</Link>
        </h5>
      </div>
    </StSignUpContainer>
  );
};

export default SignUp;

const StSignUpContainer = styled.div`
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
