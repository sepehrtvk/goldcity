import React from 'react';
import Header from '../header/header';
import { useAppSelector } from '../../redux/hooks';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const isAuth = useAppSelector((state) => state.user.isLoggedIn);
  const router = useRouter();

  // if (!isAuth) router.('/login');

  return (
    <>
      {isAuth && <Header />}
      <main className={isAuth ? 'container' : ''}>{children}</main>
    </>
  );
};

export default Layout;
