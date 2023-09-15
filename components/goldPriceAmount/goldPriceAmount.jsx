import React from 'react';
import {
  toLocaleCurrencyString,
  toLocaleNumberString,
} from '../../common/Localization';

const GoldPriceAmount = () => {
  return (
    <div className='px-md-5 my-4 my-md-5'>
      <div className='alert alert-warning'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <span className='text-primary'>موجودی طلای خام</span>
          </div>
          <div>
            <span className='text-gold ms-2'>{toLocaleNumberString('0')}</span>
            <span className='text-primary'>گرم</span>
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <span className='text-primary ms-2'>خرید:</span>
            <span className='text-gold'>
              {toLocaleCurrencyString('23700704')}
            </span>
            <span className='text-primary me-1'>ریال</span>
          </div>
          <div>
            <span className='text-primary ms-2'>فروش:</span>
            <span className='text-gold'>
              {toLocaleCurrencyString('23700704')}
            </span>
            <span className='text-primary me-1'>ریال</span>
          </div>
        </div>
      </div>
      <div className='alert alert-light mt-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <span className='text-primary'>موجودی کیف پول</span>
          </div>
          <div>
            <span className='text-gold ms-2'>
              {toLocaleCurrencyString('0')}
            </span>
            <span className='text-primary'>ریال</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldPriceAmount;
