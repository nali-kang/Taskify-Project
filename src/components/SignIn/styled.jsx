import { styled } from 'styled-components';

export const signinback = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.gray_FA};
`;

export const signin = styled.div`
  width: 100%;
  max-width: 52rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const logoWrap = styled.div`
  margin-bottom: 3.8rem;
  text-align: center;

  & p {
    color: ${({ theme }) => theme.color.black_33};
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;

export const logo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media all and (max-width: 767px) {
    width: 11.9rem;
    height: 16.5rem;
  }
`;

export const loginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media all and (max-width: 767px) {
    padding: 0 1.2rem;
  }
`;

export const submit = styled.input`
  display: flex;
  width: 100%;
  max-width: 52rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.violet};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

export const signup = styled.div`
  color: ${({ theme }) => theme.color.black_33};
  text-align: center;
  font-size: 1.6rem;
  margin-top: 2.4rem;

  & span {
    color: ${({ theme }) => theme.color.violet};
    text-decoration-line: underline;
    margin-left: 0.5rem;
  }
`;
