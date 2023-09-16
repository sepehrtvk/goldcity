import React, { useState } from 'react';
import { toLocaleCurrencyString } from '../../common/Localization';
import SellAndBuyPrice from '../../components/sellAndBuyPrice/sellAndBuyPrice';

const BuyGoldFromUs = () => {
  const [values, setValues] = useState(null);

  const getValues = (values) => {
    setValues(values);
  };

  return (
    <div className='row justify-content-center my-5'>
      <div className='col-12 col-md-4'>
        <div className='border border-primary rounded-2 p-3 bg-light'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <span className='text-primary fw-bold'>خرید طلا از ما</span>
            </div>
            <div>
              <span className='text-gold ms-2'>
                {toLocaleCurrencyString('23700704')}
              </span>
              <span className='text-primary'>ریال</span>
            </div>
          </div>
        </div>

        <div className='border border-primary rounded-2 p-3 bg-light mt-4'>
          <div className='d-flex flex-column justify-content-between '>
            <SellAndBuyPrice goldPrice={23700704} getValues={getValues} />
            <p className='mt-2'>
              {`شما مقدار ${
                values && values.amount ? values.amount : '0'
              } گرم طلای خام دریافت خواهید نمود`}
            </p>
            <p>موجودی کیف پول شما 0 ریال است.</p>
            <p style={{ textAlign: 'justify', lineHeight: '1.75rem' }}>
              به دلیل نوسانات قیمت، پس از تایید اولیه و قبل از خرید نهایی، میزان
              دقیق قابل خرید نمایش داده خواهد شد.
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <span className='btn btn-primary w-100'>مشاهده پیش فاکتور</span>
        </div>
      </div>
    </div>
  );
};

export default BuyGoldFromUs;
