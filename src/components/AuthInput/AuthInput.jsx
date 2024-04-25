import { forwardRef } from 'react';

import useBooleanState from '../../hooks/useBooleanState';

import * as S from './styled';

const AuthInput = forwardRef(function AuthInput(
  { name, data, placeholder, label, error, onBlur, onChange, value },
  ref,
) {
  // eslint-disable-next-line no-unused-vars
  const [isPassword, _, __, togglePassword] = useBooleanState();

  return (
    <>
      {data !== 'pwd' ? (
        <S.inputWrap>
          <S.label htmlFor={data}>{label}</S.label>
          <S.input
            name={name}
            ref={ref}
            type={data === '이메일' ? 'email' : 'text'}
            id={data}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            error={error}
          />
          {error && data === '이메일' && <S.wrong>{data} 형식으로 작성해 주세요.</S.wrong>}
          {error && data === '닉네임' && <S.wrong>10자 이하로 작성해주세요.</S.wrong>}
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor={data + label}>{label}</S.label>
          <S.inputInner>
            <S.input
              name={name}
              ref={ref}
              type={isPassword ? 'password' : 'text'}
              id={data + label}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={error}
            />
            <S.imageWrap onClick={togglePassword}>
              {isPassword ? (
                <img src="src/assets/icon/eyeOffIcon.svg" alt="비밀번호 숨기려면 클릭" />
              ) : (
                <img src="src/assets/icon/eyeOnIcon.svg" alt="비밀번호 숨기려면 클릭" />
              )}
            </S.imageWrap>
          </S.inputInner>
          {error &&
            (label === '비밀번호' ? (
              <S.wrong>8자 이상 입력해 주세요.</S.wrong>
            ) : (
              <S.wrong>비밀번호를 확인해 주세요.</S.wrong>
            ))}
        </S.inputWrap>
      )}
    </>
  );
});

export default AuthInput;
