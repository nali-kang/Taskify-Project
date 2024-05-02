import { styled } from 'styled-components';

export const background = styled.div`
  padding: 3.2rem 2.8rem 2.8rem 2.8rem;
  background-color: white;
`;

export const container = styled.div`
  flex-shrink: 0;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.color.white};
  flex-direction: column;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 2.8rem 2rem 2.8rem 2rem;
    width: initial;
    height: initial;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-size: 24px;
`;

export const buttonFlex = styled.div`
  margin-top: 2.8rem;
  justify-content: center;
  display: flex;
  gap: 1.2rem;
`;

export const button = styled.button`
  display: flex;
  padding: 1.4rem 4.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ disabled, theme }) => (disabled ? theme.color.violet_8p : theme.color.violet)};
  color: ${({ theme }) => theme.color.white} !important;
  text-align: center;

  font-size: 1.5rem;
  font-weight: 500;

  &:hover {
    background: ${({ disabled, theme }) =>
      disabled ? theme.color.violet_8p : theme.color.violet} !important;
    color: ${({ theme }) => theme.color.white} !important;
  }

  @media (max-width: 767px) {
    padding: 1.2rem 5.6rem;
    font-size: 1.4rem;
  }
`;

export const cancelButton = styled.button`
  display: flex;
  padding: 1.4rem 4.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.gray_D9};
  color: ${({ theme }) => theme.color.gray_78};
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: 767px) {
    padding: 1.2rem 5.6rem;
    font-size: 1.4rem;
  }
`;
