import { Outlet } from 'react-router-dom';
import MainFooter from '@components/MainPage/MainFooter';
import MainHeader from '@components/MainPage/MainHeader';

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default MainLayout;
