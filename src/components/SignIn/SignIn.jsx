import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import AuthInput from '../AuthInput/AuthInput';
import BaseModal from '../common/Modal';
import ModalCheckIt from '../modal/modalCheckIt';

import useBooleanState from '../../hooks/useBooleanState';

import axios from '../../lib/axios';

import useUserStore from '../../store/userStore';

import * as S from './styled';

const PASSWORD_MIN_LENGTH = 8;

function SignIn() {
  const setUser = useUserStore((state) => state.setUser);
  const [isOpenPasswordErrorModal, openPasswordErrorModal, closePasswordErrorModal] =
    useBooleanState();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    mode: 'all',
  });

  const { mutateAsync: login } = useMutation({
    mutationFn: (value) => {
      return axios.post('/auth/login', value);
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (fieldValues) => {
    try {
      const { data } = await login(fieldValues);
      const { accessToken, user } = data;

      localStorage.setItem('accessToken', accessToken);

      setUser(user);

      navigate('/');
    } catch (error) {
      openPasswordErrorModal();
    }
  };

  useEffect(
    function redirectToHomeWhenHasAuth() {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        navigate('/');
      }
    },
    [navigate],
  );

  return (
    <>
      <BaseModal isOpen={isOpenPasswordErrorModal}>
        <ModalCheckIt
          text="존재하지 않는 유저입니다."
          confirmButton="확인"
          onClickConfirm={closePasswordErrorModal}
        />
      </BaseModal>

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

          <S.loginForm onSubmit={handleSubmit(onSubmit)}>
            <AuthInput
              label="이메일"
              placeholder="이메일을 입력해 주세요"
              data="이메일"
              error={errors.email?.message}
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: '이메일 형식에 맞게 입력해주세요.',
                },
              })}
            />
            <AuthInput
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요"
              data="pwd"
              error={errors.password?.message}
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                minLength: {
                  value: PASSWORD_MIN_LENGTH,
                  message: '비밀번호는 8자 이상 입력해주세요.',
                },
              })}
            />
            <S.submit type="submit">로그인</S.submit>
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
