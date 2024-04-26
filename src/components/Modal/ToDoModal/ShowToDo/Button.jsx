import * as S from './styled';

const Button = ({ children, onClick }) => {
  return <S.StyledButton onClick={onClick}>{children}</S.StyledButton>;
};

export default Button;
