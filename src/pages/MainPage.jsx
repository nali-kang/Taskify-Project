import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/MainPage/Main';

const MainPage = () => {
  return (
    <>
      <Main />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={'/mydashboard'}>mydashboard</Link>
        <Link to={'/dashboard/1'}>dashboard</Link>
        <Link to={'/dashboard/1/edit'}>dashboard edit</Link>
        <Link to={'/login'}>login</Link>
        <Link to={'/signup'}>signup</Link>
        <Link to={'/mypage'}>mypage</Link>
      </div>
    </>
  );
};

export default MainPage;
