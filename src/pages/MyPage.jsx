import styled from 'styled-components';
import MEDIA_QUERIES from '../constants/MEDIA_QUERIES';
import BackBtn from '../components/MyPage/BackBtn';
import ProfileModify from '../components/MyPage/ProfileModify';
import PasswordModify from '../components/MyPage/PasswordModify';

const MyPage = () => {
  return (
    <Div>
      <ContentDiv>
        <ContentBox>
          <BackBtn />
          <ProfileModify name="닉네임을 입력해주세요" />
          <PasswordModify />
        </ContentBox>
      </ContentDiv>
    </Div>
  );
};

export default MyPage;

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ContentDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ContentBox = styled.div`
  position: absolute;
  top: 5rem;
  left: 19rem;
  display: flex;
  flex-direction: column;
  height: 55rem;
  padding: 1.1rem 2rem;
  background-color: ${({ theme }) => theme.color.gray_FA};

  ${MEDIA_QUERIES.onTablet} {
    height: 61.05rem;
  }
`;
