import { useState } from 'react';
import * as S from './styled';

function AuthInput({ data, placeholder, title, wrong, handleBlur, handleChange, value, test }) {
  const [pwd, setPwd] = useState(true);

  const handlePwd = () => {
    setPwd((prev) => !prev);
  };

  return (
    <>
      {data !== 'pwd' ? (
        <S.inputWrap>
          <S.label htmlFor={data}>{title}</S.label>
          <S.input
            onBlur={handleBlur}
            type={data === '이메일' ? 'email' : 'text'}
            id={data}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            onFocus={test}
            wrong={wrong}
          ></S.input>
          {wrong && data === '이메일' && <S.wrong>{data} 형식으로 작성해 주세요.</S.wrong>}
          {wrong && data === '닉네임' && <S.wrong>10자 이하로 작성해주세요.</S.wrong>}
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor={data + title}>{title}</S.label>
          <S.inputInner>
            <S.input
              type={pwd ? 'password' : 'text'}
              id={data + title}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={value}
              onFocus={test}
              wrong={wrong}
            ></S.input>
            <S.imageWrap onClick={handlePwd}>
              {pwd ? (
                <img src="src/assets/icon/eyeOffIcon.svg" alt="비밀번호 숨기려면 클릭" />
              ) : (
                <img src="src/assets/icon/eyeOnIcon.svg" alt="비밀번호 숨기려면 클릭" />
              )}
            </S.imageWrap>
          </S.inputInner>
          {wrong &&
            (title === '비밀번호' ? (
              <S.wrong>8자 이상 입력해 주세요.</S.wrong>
            ) : (
              <S.wrong>비밀번호를 확인해 주세요.</S.wrong>
            ))}
        </S.inputWrap>
      )}
    </>
  );
}

export default AuthInput;
