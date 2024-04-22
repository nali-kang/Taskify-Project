import { createPortal } from 'react-dom';
import styled from 'styled-components';

const BaseModal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(<Dimmed>{children}</Dimmed>, document.getElementById('modal'));
};

export default BaseModal;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
