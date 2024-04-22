import { useState } from 'react';
import styled, { css } from 'styled-components';

const LoginInput = ({
  id,
  type,
  name,
  label,
  register,
  errors,
  rules,
  password = false,
  placeholder = '내용을 입력하세요',
}) => {
  const errorMessages = errors && errors[name] ? errors[name]?.message : null;
  const isError = !!(errors && errorMessages);

  const [isEyeOff, setIsEyeOff] = useState('');
  const handleClickEyeToggle = () => {
    setIsEyeOff((isEyeOff) => !isEyeOff);
  };

  return (
    <>
      {label ? <StAuthLabel htmlFor={id}>{label}</StAuthLabel> : null}

      <StAuthInputContainer className={isError ? 'red' : ''}>
        {password ? (
          <>
            <input
              id={id}
              type={!isEyeOff ? type : 'text'}
              placeholder={placeholder}
              {...(register && register(name, rules))}
            />
            <button type="button" onClick={handleClickEyeToggle}>
              {isEyeOff ? (
                <img src="/src/assets/icon/eyeOnIcon.svg" alt="비밀번호 보려면 클릭" />
              ) : (
                <img src="/src/assets/icon/eyeOffIcon.svg" alt="비밀번호 숨기려면 클릭" />
              )}
            </button>
          </>
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            {...(register && register(name, rules))}
          />
        )}
      </StAuthInputContainer>
      {isError && typeof errorMessages === 'string' ? (
        <StErrorMessage aria-live="assertive">{errorMessages}</StErrorMessage>
      ) : null}
    </>
  );
};

export default LoginInput;

const inputContainer = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-radius: 8px;
  background: white;
  border: 1px solid gray;

  &:focus-within {
    border: 1px solid violet;
  }

  &.red {
    border: 1px solid red;
  }
`;

const input = css`
  width: 100%;
  font-size: 1.6rem;
  line-height: 1;

  &:placeholder {
    color: grey;
  }
`;

const StErrorMessage = styled.p`
  font-size: 1.4rem;
  margin-top: 8px;
  color: red;
`;

const StAuthLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  color: black;
  margin-bottom: 8px;

  & ~ label {
    margin-top: 16px;
  }
`;

const StAuthInputContainer = styled.div`
  ${inputContainer}

  padding: 12px 16px;

  button {
    width: 24px;
    height: 24px;
  }

  input {
    ${input}
    height: 24px;
  }
`;
