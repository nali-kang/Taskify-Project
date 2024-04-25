import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const BaseModal = ({ isOpen, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    }
    return () => {
      if (isOpen) {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    };
  }, [isOpen]);

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
