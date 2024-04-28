import styled from 'styled-components';
import MEDIA_QUERIES from '../constants/MEDIA_QUERIES';
import BackBtn from '../components/MyPage/BackBtn';
import ProfileModify from '../components/MyPage/ProfileModify';
import PasswordModify from '../components/MyPage/PasswordModify';
import DashLayout from '../layout/DashLayout';

const MyPage = () => {
  return (
    <DashLayout myPage>
      <Div>
        <ContentDiv>
          <ContentBox>
            <BackBtn />
            <ProfileModify name="닉네임을 입력해주세요" />
            <PasswordModify />
          </ContentBox>
        </ContentDiv>
      </Div>
    </DashLayout>
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
  top: 0.05rem;
  left: 16.5rem;
  display: flex;
  flex-direction: column;
  height: 55rem;
  padding: 1.1rem 2rem;
  background-color: ${({ theme }) => theme.color.gray_FA};

  ${MEDIA_QUERIES.onTablet} {
    height: 61.05rem;
  }
`;
