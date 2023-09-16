import React, { useEffect, useState } from 'react';
import {
  convertNumbersToEnglish,
  isFloat,
  toLocaleCurrencyString,
} from '../../common/Localization';

const SellAndBuyPrice = ({ goldPrice, getValues }) => {
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    getValues({ price, amount });
  }, [price, amount]);

  return (
    <div className='my-4'>
      <div className='mb-3 d-flex align-items-center justify-content-center'>
        <label htmlFor='amount' className='form-label mb-0 ms-3 fw-bold'>
          مبلغ
        </label>
        <input
          value={price && toLocaleCurrencyString(price)}
          type='text'
          className='form-control text-center'
          id='amount'
          style={{ width: 200 }}
          onChange={(e) => {
            const valueKey = e.target.value.replaceAll('٬', '');
            const value = convertNumbersToEnglish(valueKey);
            const re = /^[0-9\b]+$/;

            if (value === '' || re.test(value)) {
              setPrice(value);
              const number = +value / goldPrice;

              if (isFloat(number)) {
                setAmount(number.toFixed(8).toString());
              } else {
                setAmount(number.toString());
              }
            }
          }}
        />
        <span className='me-2'>ریال</span>
      </div>
      <div className='mb-3 d-flex align-items-center justify-content-center'>
        <label htmlFor='amount' className='form-label mb-0 ms-2 fw-bold'>
          مقدار
        </label>
        <input
          value={amount}
          onChange={(e) => {
            const value = e.target.value;

            const re = /^[0-9\b]+$/;

            if (value === '' || re.test(value)) {
              setAmount(value);
              setPrice((+value * goldPrice).toString());
            }
          }}
          type='text'
          className='form-control text-center'
          style={{ width: 200 }}
          id='amount'
        />
        <span className='me-2'>گرم</span>
      </div>
    </div>
  );
};

export default SellAndBuyPrice;
