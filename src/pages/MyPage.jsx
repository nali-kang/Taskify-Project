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
`;

const ContentDiv = styled.div`
  flex: 1;
`;

const ContentBox = styled.div`
  height: 101rem;
  padding: 2rem 0 0 2rem;
  background-color: ${({ theme }) => theme.color.background};

  ${MEDIA_QUERIES.onTablet} {
    height: 111rem;
  }
`;
