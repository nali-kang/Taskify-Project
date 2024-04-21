import styled from 'styled-components';

const FullButton = ({ disabled, children }) => {
  return (
    <>
      <StFullButton disabled={disabled}>
        <span>{children}</span>
      </StFullButton>
    </>
  );
};

export default FullButton;

const StFullButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border-radius: 8px;
  background-color: violet;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  span {
    font-size: 1.8rem;
    color: white;
    line-height: 1;
  }
`;
