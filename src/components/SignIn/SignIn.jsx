import { useEffect, useState } from 'react';
import * as S from './styled';
// import styled from "styled-components";
import AuthInput from '../AuthInput/AuthInput';
// import axios from "../../lib/axios";
import { Link, useNavigate } from 'react-router-dom';
// import useUserStore from "../../store/userStore";
// import ModalCheckIt from "../model/modalCheckIt";
// import useToggle from "../../hooks/useToggle";

function SignIn() {
  // const { user, setUser } = useUserStore();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  // const [showPwdError, setShowPwdError, showPwdToggle] = useToggle(false);
  // const [showPwdError, showPwdToggle] = useToggle(false);

  // const [value, setValue] = useState({
  const [setValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const LS = localStorage.getItem('login');
    if (LS !== null) {
      navigate('/');
    }
  }, [navigate]);

  const validateEmail = (email) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    setEmailError(!isValidEmail); // 이메일이 유효하지 않을 때 true 설정
    setValue((prev) => ({ ...prev, email }));

    // setValue((prev) => ({
    //   ...prev,
    //   email: email,
    // }));
  };

  const validatePassword = (password) => {
    const isPasswordValid = password.length >= 8;
    setPasswordError(!isPasswordValid);
    setValue((prev) => ({ ...prev, password }));

    // setValue((prev) => ({
    //   ...prev,
    //   password: password,
    // }));
  };

  const handleFocusOut = (e) => {
    if (e.target.id === '이메일') {
      validateEmail(e.target.value);
    } else if (e.target.id === 'pwd비밀번호') {
      validatePassword(e.target.value);
    }
  };

  // const login = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("auth/login", value);
  //     localStorage.setItem("login", res.data.accessToken);
  //     await setUserData();
  //     navigate("/");
  //   } catch (error) {
  //     setEmailError(true);
  //     setPasswordError(true);
  //     if (value.email !== "" && value.password !== "") {
  //       showPwdToggle();
  //     }
  //     console.error("로그인 실패:", error);
  //   }
  // };
  // async function login(e) {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("auth/login", value);
  //     localStorage.setItem("login", res.data.accessToken);

  //     await setUserData();
  //     navigate.push("/");
  //   } catch (error) {
  //     setEmailError(true);
  //     setPasswordError(true);
  //     if (value.email !== "" && value.password !== "") {
  //       showPwdToggle();
  //     }
  //     console.error("로그인 실패:", error);
  //   }
  // }

  // const setUserData = async () => {
  //   try {
  //     const response = await axios.get("users/me");
  //     setUser(response.data);
  //   } catch (error) {
  //     console.error("사용자 정보 가져오기 실패:", error);
  //   }
  // };

  return (
    <>
      {/* {showPwdError && (
        <ModalCheckIt
          text="비밀번호가 일치하지 않습니다."
          submitButton="확인"
          wrong={showPwdToggle}
        />
      )} */}
      <S.signinback>
        <S.signin>
          <S.logoWrap>
            <S.logo>
              <Link to="/">
                <img src="src/assets/images/largeLogo.svg" alt="랜딩 페이지로 이동하려면 클릭" />
              </Link>
            </S.logo>
            <p>오늘도 만나서 반가워요!</p>
          </S.logoWrap>
          {/* onSubmit={login} */}
          {/* onChange={handleSubmit(onSubmit)} */}
          {/* <S.loginForm onSubmit={login}> */}
          <S.loginForm>
            <AuthInput
              // hookform={register("email")}
              title="이메일"
              placeholder="이메일을 입력해 주세요"
              data="이메일"
              wrong={emailError}
              handleBlur={handleFocusOut}
            />
            <AuthInput
              // hookform={register("password")}
              title="비밀번호"
              placeholder="비밀번호를 입력해 주세요"
              data="pwd"
              wrong={passwordError}
              handleBlur={handleFocusOut}
            />

            <S.submit type="submit" value="로그인" />
          </S.loginForm>

          <S.signup>
            회원이 아니신가요?
            <span>
              <Link to="/signup">회원가입하기</Link>
            </span>
          </S.signup>
        </S.signin>
      </S.signinback>
    </>
  );
}

export default SignIn;
