import styled from 'styled-components';
import { COLOR_LIST } from '@constants/constants';
import check_icon from '@icon/check_icon.svg';

const SelectColorButton = ({ color, setColor }) => {
  return (
    <ColorRadioContainer>
      {COLOR_LIST.map((e) => {
        return (
          <ColorButton color={e} key={e} onClick={() => setColor(e)}>
            {color === e ? <img src={check_icon} /> : <></>}
          </ColorButton>
        );
      })}
    </ColorRadioContainer>
  );
};

export default SelectColorButton;

const ColorRadioContainer = styled.div`
  display: flex;
  gap: 0.62rem;
`;

const ColorButton = styled.button`
  width: 1.875rem;
  height: 1.875rem;
  border: none;
  padding: 0;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
