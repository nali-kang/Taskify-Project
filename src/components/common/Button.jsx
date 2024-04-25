import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BUTTON_TYPE } from '../../constants/BUTTON_TYPE';
import { buttonStyleBySize, buttonStyleByType } from '../../styles/ButtonStyles';
const Btn = styled.button`
  padding: 0.5rem 1rem;
  white-space: nowrap;
`;

Btn.defaultProps = ({ size, $styleType }) => ({
  ...buttonStyleBySize[size],
  ...buttonStyleByType[$styleType],
  '&:disabled': {
    backgroundColor: 'gray',
    cursor: 'not-allowed',
  },
});

function Button({ children, styleType = BUTTON_TYPE.PRIMARY, size = 'M', ...htmlButtonProps }) {
  return (
    <Btn {...htmlButtonProps} size={size} $styleType={styleType}>
      {children}
    </Btn>
  );
}

// props 검증 -> propTypes: 입력 받은 타입을 검증
Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['S', 'M', 'L']),
  styleType: PropTypes.oneOf(Object.keys(BUTTON_TYPE)),
};

export default Button;
