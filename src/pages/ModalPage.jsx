import styled from 'styled-components';

import BaseModal from '../components/common/Modal';
import useBooleanState from '../hooks/useBooleanState';

const ModalPage = () => {
  const [isModalOpen, openModal, closeModal] = useBooleanState();

  return (
    <div>
      <h1>모달을 띄워요</h1>
      <button onClick={openModal}>토글</button>
      <BaseModal isOpen={isModalOpen}>
        <Container>
          <Title>비밀번호가 일치하지 않습니다.</Title>
          <ButtonWrapper>
            <ConfirmButton onClick={closeModal}>확인</ConfirmButton>
          </ButtonWrapper>
        </Container>
      </BaseModal>
    </div>
  );
};

const Container = styled.div`
  width: 540px;
  height: 250px;
  background-color: white;
`;

const Title = styled.div`
  margin-top: 108px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 45px;
  margin-right: 26px;
`;

const ConfirmButton = styled.button`
  width: 120px;
  height: 48px;
  background-color: #5534da;
  color: white;
`;

export default ModalPage;
