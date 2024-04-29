import styled from 'styled-components';
import Button from '../common/Button';
import BaseModal from '../common/Modal';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';

const PasswordModal = ({ isModalOpen, onClose, message }) => {
  return (
    <BaseModal isOpen={isModalOpen}>
      <Div>
        <Text>{message}</Text>
        <Btn onClick={onClose} styleType="PRIMARY" size="S">
          확인
        </Btn>
      </Div>
    </BaseModal>
  );
};

const Div = styled.div`
  position: relative;
  width: 37.8rem;
  height: 17.5rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;

  @media ${MEDIA_QUERIES.onMobile} {
    width: 28rem;
    height: 17rem;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.black_33};
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 540;

  @media ${MEDIA_QUERIES.onMobile} {
    top: 40%;
    font-size: 1.6rem;
  }
`;

const Btn = styled(Button)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 1.4rem 4.6rem;
  width: 8.4rem;
  height: 3.36rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${MEDIA_QUERIES.onMobile} {
    padding: 1.2rem 5.6rem;
    right: 50%;
    transform: translate(50%);
  }
`;

export default PasswordModal;
