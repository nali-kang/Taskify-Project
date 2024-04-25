import styled from 'styled-components';

const Input = ({ label, id, ...htmlInputProps }) => {
  return (
    <Div>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} {...htmlInputProps} />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.color.black_00};
  font-size: 1.6rem;
  font-weight: 400;
`;

const InputField = styled.input`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 1.5rem 1.6rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.gray_D9};
  background: ${({ theme }) => theme.color.white};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray_9F};
    font-size: 1.6rem;
    font-weight: 400;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.purple};
  }
`;

export default Input;
