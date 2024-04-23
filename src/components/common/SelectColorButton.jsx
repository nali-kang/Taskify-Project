import styled from 'styled-components';
import { COLOR_LIST } from '@constants/constants';

const SelectColorButton = ({ color, setColor }) => {
  return (
    <ColorRadioContainer>
      {COLOR_LIST.map((e) => {
        return (
          <ColorButton color={e} key={e} onClick={() => setColor(e)}>
            {color === e ? <>1</> : <></>}
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
  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
