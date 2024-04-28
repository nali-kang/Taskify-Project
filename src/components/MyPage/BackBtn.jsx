import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/icon/back_icon.png';

const BackBtn = () => {
  const navigate = useNavigate(); // useNavgate 훅을 사용하여 history 객체 가져오기

  const handleBack = () => {
    navigate('/mydashboard'); // 브라우저의 뒤로 가기 동작 수행
  };

  return (
    <Div onClick={handleBack}>
      <img src={BackIcon} alt="back icon" style={{ width: '8.3px', height: '15.4px' }} />
      <Text>돌아가기</Text>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.375rem;
  cursor: pointer;
  margin-top: 4rem;
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.55rem;
`;

export default BackBtn;
