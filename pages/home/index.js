import React from 'react';
import Header from '../../components/header/header';
import GoldPriceAmount from '../../components/goldPriceAmount/goldPriceAmount';
import GoldListHome from '../../components/goldListHome/goldListHome';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const navigateToProduct = (itemId) => {
    router.push('/product/' + itemId);
  };

  return (
    <>
      <GoldPriceAmount />
      <GoldListHome navigateToProduct={navigateToProduct} />
    </>
  );
};

export default Home;
