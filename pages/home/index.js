import React from 'react';
import Header from '../../components/header/header';
import GoldPriceAmount from '../../components/goldPriceAmount/goldPriceAmount';
import GoldListHome from '../../components/goldListHome/goldListHome';

const Home = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <GoldPriceAmount />
        <GoldListHome />
      </main>
    </>
  );
};

export default Home;
