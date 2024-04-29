import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  position: relative;
  margin: 10.82rem auto 1rem;

  @media (max-width: 767) {
    margin: 10.8rem auto 0.8rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 3.8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const CheckBox = styled.div`
  align-items: center;
  display: flex;
  gap: 0.8rem;
`;

export const CheckInput = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.color.gray_D9};
`;

export const NoneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52rem;
  height: 5rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.color.gray_9F};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    width: 35rem;
    height: 5rem;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  width: 52rem;
  height: 5rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.color.violet};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    width: 35rem;
    height: 5rem;
    gap: 1rem;
  }
`;

export const Logintext = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.black};
  font-size: 1.6rem;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 10.75rem;
`;

export const LinkLogin = styled.p`
  color: ${({ theme }) => theme.color.violet};
  text-decoration-line: underline;
  margin-left: 0.5rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.6rem;
  font-weight: 400;
`;
