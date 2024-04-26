import { styled } from 'styled-components';

export const background = styled.div`
  width: 100%;
  z-index: 1;
  position: absolute;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  height: 121.1rem;
`;

export const container = styled.div`
  padding: 3.2rem 2.8rem 2.8rem 2.8rem;
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

export const buttonFlex = styled.div`
  margin-top: 2.8rem;
  justify-content: flex-end;
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
