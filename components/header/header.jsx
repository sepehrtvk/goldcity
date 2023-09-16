import React from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <nav className='navbar bg-dark'>
      <div className='container justify-content-start align-items-center'>
        <span
          className='navbar-brand mb-0 h1 text-white ms-4 ms-md-5'
          onClick={() => {
            router.push('/home');
          }}>
          گلدسیتی
        </span>
        <span
          className='btn text-white mx-4'
          onClick={() => {
            router.push('/buyGoldFromUs');
          }}>
          خرید طلا از ما
        </span>
        <span
          className='btn text-white mx-4'
          onClick={() => {
            router.push('/sellGoldToUs');
          }}>
          فروش طلا به ما
        </span>
      </div>
    </nav>
  );
};

export default Header;
