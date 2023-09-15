import Image from 'next/image';
import React from 'react';
import goldPhoto from '../../public/assets/images/goldPhoto.jpeg';
import { getAllGoldList } from '../../Data/index';

const GoldListHome = ({ navigateToProduct }) => {
  const renderGoldItem = (item) => {
    return (
      <div
        key={item.id}
        className='col-12 col-md-4'
        onClick={() => {
          navigateToProduct(item.id);
        }}>
        <div className='card btn btn-dark'>
          <Image
            className='align-self-center rounded-2'
            alt='goldPhoto'
            src={goldPhoto}
            width={160}
          />
          <div className='card-body'>
            <p className='card-text fw-bold'>{item.title}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <span>وزن</span>
              </div>
              <div>
                <span className='text-gold ms-1'>{item.weight}</span>
                <span>گرم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className='px-md-5 mt-4 mt-md-5'>
      <div className='row g-4'>
        {getAllGoldList().map((item) => renderGoldItem(item))}
      </div>
    </div>
  );
};

export default GoldListHome;
