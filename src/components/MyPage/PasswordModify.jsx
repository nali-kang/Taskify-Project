import { useState } from 'react';
import InputField from './Input';
import Button from '../common/Button';
import styled from 'styled-components';
import { BUTTON_TYPE } from '../../constants/BUTTON_TYPE';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';

const PasswordModify = () => {
  const [currentPW, setCurrentPW] = useState(''); // 현재 비밀번호 상태
  const [newPW, setNewPW] = useState(''); // 새 비밀번호 상태
  const [confirmPW, setConfirmPW] = useState(''); // 새 비밀번호 확인 상태
  const [pwMiss, setPwMiss] = useState(false);

  // 변경 버튼 비활성화 여부 확인!!
  const isDisabled = !currentPW || !newPW || !confirmPW || pwMiss;

  const checkPWMatch = () => {
    if (newPW !== confirmPW) {
      setPwMiss(true);
    } else {
      setPwMiss(false);
    }
  };

  const handleChangePW = () => {
    if (currentPW !== '1234') {
      //예시
      alert('현재 비밀번호가 틀립니다.');
    } else if (!pwMiss && newPW && confirmPW && newPW === confirmPW) {
      //비밀번호 변경 처리 추가
      alert('비밀번호가 변경되었습니다.');
    }
  };

  return (
    <Div>
      <Div2>
        <Title>비밀번호 변경</Title>
        <PwContent>
          <InputField
            label="현재 비밀번호"
            id="current-password"
            type="text"
            placeholder="현재 비밀번호 입력"
            onChange={(e) => setCurrentPW(e.target.value)}
          />
          <InputField
            label="새 비밀번호"
            id="new-password"
            type="text"
            placeholder="새 비밀번호 입력"
            onChange={(e) => setNewPW(e.target.value)}
          />
          <InputField
            label="새 비밀번호 확인"
            id="confirm-password"
            type="text"
            placeholder="새 비밀번호 입력"
            onBlur={checkPWMatch}
            onChange={(e) => setConfirmPW(e.target.value)}
            style={pwMiss ? { borderColor: 'red' } : null}
          />
          {pwMiss && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </PwContent>
        <StorageBtn
          size="L"
          styleType={BUTTON_TYPE.PRIMARY}
          style={{ width: '4rem' }}
          disabled={isDisabled}
          onClick={handleChangePW}
        >
          변경
        </StorageBtn>
      </Div2>
    </Div>
  );
};

const Div = styled.div`
  width: 34rem;
  height: 22.8rem;
  padding: 1.8rem 1.5rem 1.5rem 1.5rem;
  margin: 0.66rem 1.1rem 0 0;
  border-radius: 0.44rem;
  background-color: ${({ theme }) => theme.color.white};

  ${MEDIA_QUERIES.onMobile} {
    width: 15.6rem;
    height: 24.86rem;
    margin-top: 0.66rem;
  }
`;

const Div2 = styled.div``;

const Title = styled.span`
  font-size: 1.32rem;
  font-weight: 700;
`;

const PwContent = styled.div`
  margin-top: 0.66rem;

  & > * {
    margin-top: 1.1rem;
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: 0.66rem;
  margin-top: 0.275rem;
`;

const StorageBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.77rem;
  padding: 0.45rem 1.6rem 0.385rem 1.6rem;
  margin-left: 26.4rem;
  margin-top: 1.32rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.violet};

  ${MEDIA_QUERIES.onMobile} {
    margin-left: 7.975rem;
  }
`;
export default PasswordModify;
