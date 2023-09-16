import React from 'react';
import Header from '../header/header';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {/* <main className='container'>{children}</main> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
