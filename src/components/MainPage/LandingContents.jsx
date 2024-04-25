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

    @media (max-width: 743px) {
      width: 17.9375rem;
      height: 10.5rem;
      margin-bottom: 1.62rem;
    }
    @media (min-width: 744px) and (max-width: 1220px) {
      width: 33.57813rem;
      height: 19.6725rem;
    }
  }
`;
const TitleTextDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 1.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 743px) {
    flex-direction: column;
    gap: 0.31rem;
  }
  .main-text {
    color: ${({ theme }) => theme.color.white};
    font-family: Pretendard;
    font-size: 4.75rem;
    font-weight: 700;
    line-height: 6.25rem; /* 131.579% */
    letter-spacing: -0.125rem;

    @media (max-width: 743px) {
      font-size: 2.5rem;
      line-height: normal;
    }
    @media (min-width: 744px) and (max-width: 1220px) {
      font-size: 3.5rem;
    }
  }
  .taskify-text {
    color: ${({ theme }) => theme.color.violet};
    font-family: Montserrat;
    font-size: 5.625rem;
    font-weight: 700;
    line-height: 4.0625rem; /* 72.222% */
    letter-spacing: -0.0625rem;

    @media (max-width: 743px) {
      font-size: 2.625rem;
      line-height: normal;
    }
    @media (min-width: 744px) and (max-width: 1220px) {
      font-size: 4.375rem;
    }
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

  @media (max-width: 743px) {
    font-size: 0.75rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    font-size: 1rem;
  }
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

  @media (max-width: 743px) {
    width: 14.7rem;
    padding: 0.8125rem 0rem 0.75rem 0rem;
    font-size: 0.875rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    font-size: 1rem;
  }
`;
export default LandingContents;
