import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/icon/back_icon.png';

const BackBtn = () => {
  const navigate = useNavigate(); // useNavgate 훅을 사용하여 history 객체 가져오기

  const handleBack = () => {
    navigate(-1); // 브라우저의 뒤로 가기 동작 수행
  };

  return (
    <Div onClick={handleBack}>
      <img src={BackIcon} alt="back icon" />
      <Text>돌아가기</Text>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2.5rem;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 1rem;
`;

export default BackBtn;
