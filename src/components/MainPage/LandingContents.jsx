import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingContents = () => {
  return (
    <TitleContents>
      <img src="/src/assets/images/main/desktop.png" />
      <TitleTextDiv>
        <strong className="main-text">새로운 일정 관리</strong>
        <span className="taskify-text">Taskify</span>
      </TitleTextDiv>
      <SubtitleText>
        Taskify는 할일을 등록하고, 진행 상황을 체계적으로 관리하도록 도와줍니다.
        <br /> 팀원을 초대하고 추가함으로써, 업무 과정을 실시간으로 공유할 수 있습니다.
        <br />더 이상 업무 관리에 시간을 낭비하지 말고, Taskify하세요!
      </SubtitleText>
      <LoginButton to="/login">로그인하기</LoginButton>
    </TitleContents>
  );
};

const TitleContents = styled.section`
  padding-top: 10.3rem;
  padding-bottom: 11.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 45.125rem;
    height: 26.42256rem;
    margin-bottom: 3rem;
  }
`;
const TitleTextDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 1.75rem;
  margin-bottom: 1.5rem;
  .main-text {
    color: ${({ theme }) => theme.color.white};
    font-family: Pretendard;
    font-size: 4.75rem;
    font-weight: 700;
    line-height: 6.25rem; /* 131.579% */
    letter-spacing: -0.125rem;
  }
  .taskify-text {
    color: ${({ theme }) => theme.color.violet};
    font-family: Montserrat;
    font-size: 5.625rem;
    font-weight: 700;
    line-height: 4.0625rem; /* 72.222% */
    letter-spacing: -0.0625rem;
  }
`;
const SubtitleText = styled.p`
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 4.12rem;
`;

const LoginButton = styled(Link)`
  width: 17.5rem;
  padding: 0.9375rem 0rem 0.875rem 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.violet};
  color: ${({ theme }) => theme.color.white};

  text-align: center;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;
export default LandingContents;
