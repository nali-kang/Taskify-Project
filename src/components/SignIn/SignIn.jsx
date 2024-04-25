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

// const S = {
//   signinback : styled.div`
//   width: 100%;
//   height: 100vh;
//   background: ${({ theme }) => theme.color.gray_FA};
// `,

//   signin : styled.div`
//   width: 100%;
//   max-width: 52rem;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   `,

//   logoWrap : styled.div`
//     margin-bottom: 3.8rem;
//     text-align: center;

//     & p {
//       color: ${({ theme }) => theme.color.black_33};
//       font-size: 2rem;
//       font-weight: 500;
//       margin-top: 1rem;
//     }
//   `,

//   logo : styled.div`
//     width: 20rem;
//     height: 27.9rem;
//     position: relative;
//     left: 50%;
//     transform: translateX(-50%);

//     @media all and (max-width: 767px) {
//       width: 11.9rem;
//       height: 16.5rem;
//     }
//   `,

//   loginForm : styled.form`
//     display: flex;
//     flex-direction: column;
//     gap: 3rem;

//     @media all and (max-width: 767px) {
//       padding: 0 1.2rem;
//     }
//   `,

//   submit : styled.input`
//     display: flex;
//     width: 100%;
//     max-width: 52rem;
//     height: 5rem;
//     justify-content: center;
//     align-items: center;
//     border-radius: 8px;
//     background: ${({ theme }) => theme.color.violet};
//     color: ${({ theme }) => theme.color.white};
//     font-size: 1.8rem;
//     font-weight: 500;
//     border: none;
//     cursor: pointer;
//   `,

//   signup : styled.div`
//     color: ${({ theme }) => theme.color.black_33};
//     text-align: center;
//     font-size: 1.6rem;
//     margin-top: 2.4rem;

//     & span {
//       color:  ${({ theme }) => theme.color.violet_55};
//       text-decoration-line: underline;
//       margin-left: 0.5rem;
//     }
//   `,
// }

// const signinback = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: ${({ theme }) => theme.color.gray_FA};
// `;

// const signin = styled.div`
//   width: 100%;
//   max-width: 52rem;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// `;

// const logoWrap = styled.div`
//   margin-bottom: 3.8rem;
//   text-align: center;

//   & p {
//     color: ${({ theme }) => theme.color.black_33};
//     font-size: 2rem;
//     font-weight: 500;
//     margin-top: 1rem;
//   }
// `;

// const logo = styled.div`
//   width: 20rem;
//   height: 27.9rem;
//   position: relative;
//   left: 50%;
//   transform: translateX(-50%);

//   @media all and (max-width: 767px) {
//     width: 11.9rem;
//     height: 16.5rem;
//   }
// `;

// const loginForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;

//   @media all and (max-width: 767px) {
//     padding: 0 1.2rem;
//   }
// `;

// const submit = styled.input`
//   display: flex;
//   width: 100%;
//   max-width: 52rem;
//   height: 5rem;
//   justify-content: center;
//   align-items: center;
//   border-radius: 8px;
//   background: ${({ theme }) => theme.color.gray_9F};
//   color: ${({ theme }) => theme.color.white};
//   font-size: 1.8rem;
//   font-weight: 500;
//   border: none;
//   cursor: pointer;
// `;

// const signup = styled.div`
//   color: ${({ theme }) => theme.color.black_33};
//   text-align: center;
//   font-size: 1.6rem;
//   margin-top: 2.4rem;

//   & span {
//     color:  ${({ theme }) => theme.color.violet_55};
//     text-decoration-line: underline;
//     margin-left: 0.5rem;
//   }
// `;
