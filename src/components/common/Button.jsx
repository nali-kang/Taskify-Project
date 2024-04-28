import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BUTTON_TYPE } from '../../constants/BUTTON_TYPE';
import { buttonStyleBySize, buttonStyleByType } from '../../styles/ButtonStyles';

const Button = ({ children, styleType = BUTTON_TYPE.PRIMARY, size = 'M', ...htmlButtonProps }) => {
  return (
    <Btn {...htmlButtonProps} size={size} $styleType={styleType}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['S', 'M', 'L']),
  styleType: PropTypes.oneOf(Object.keys(BUTTON_TYPE)),
};

const Btn = styled.button`
  padding: 0.5rem 1rem;
  white-space: nowrap;
  ${({ size, $styleType }) => `
    ${buttonStyleBySize[size]}
    ${buttonStyleByType[$styleType]}
  `}
  &:disabled {
    background-color: gray;
    cursor: 'not-allowed';
  }
`;

export default Button;
