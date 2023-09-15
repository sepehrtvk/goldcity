import Image from 'next/image';
import React from 'react';
import goldPhoto from '../../public/assets/images/goldPhoto.jpeg';
import goldListData from '../../Data/GOLD_LIST.json';

const GoldListHome = () => {
  const renderGoldItem = (item) => {
    return (
      <div key={item.id} className='col-12 col-md-4'>
        <div className='card'>
          <Image className='align-self-center' src={goldPhoto} width={160} />
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
        {goldListData.goldList.map((item) => renderGoldItem(item))}
      </div>
    </div>
  );
};

export default GoldListHome;
