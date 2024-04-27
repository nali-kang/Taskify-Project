import styled from 'styled-components';
import LandingContents from '@components/MainPage/LandingContents';
import PointContents from '@components/MainPage/PointContents';
import SettingContents from '@components/MainPage/SettingContents';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigator = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigator('/mydashboard', { replace: true });
    }
  }, []);
  return (
    <MainContents>
      <LandingContents />
      <PointContents
        title="Point 1"
        text={`일의 우선순위를\n관리하세요`}
        src="/src/assets/images/main/resource/point1_image.png"
        index={1}
      />
      <PointContents
        title="Point 2"
        text={`해야 할 일을\n등록하세요`}
        src="/src/assets/images/main/resource/point2_image.png"
        index={2}
      />
      <SettingContents />
    </MainContents>
  );
};

export default MainPage;

const MainContents = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.black_00};
`;
