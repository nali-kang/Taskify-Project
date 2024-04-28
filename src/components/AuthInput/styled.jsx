import styled from 'styled-components';

export const inputWrap = styled.div`
  width: 100%;
  max-width: 52rem;
  height: 7.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const inputInner = styled.div`
  position: relative;
`;

export const label = styled.label`
  color: ${({ theme }) => theme.color.black_00};
  font-size: 1.6rem;
  font-weight: 400;
`;

export const input = styled.input`
  width: 100%;
  padding: 15px 16px;
  border-radius: 8px;
  border: 1px solid ${({ error, theme }) => (error ? theme.color.red : theme.color.violet_55)};
  background: ${({ theme }) => theme.color.white};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`;

export const imageWrap = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 1.2rem;
  right: 1.6rem;
  cursor: pointer;
`;

export const wrong = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: 1.4rem;
`;
