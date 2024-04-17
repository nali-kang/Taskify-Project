import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return <div></div>;
};

const Sidebar = () => {
  return <div></div>;
};

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
