import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAllGoldItem } from '../../Data';
import goldPhoto from '../../public/assets/images/goldPhoto.jpeg';
import Image from 'next/image';
import { toLocaleCurrencyString } from '../../common/Localization';
import DotList from '../../components/ui/dotList';

const ProductDetailsPage = () => {
  const router = useRouter();

  const productId = router.query.productid;

  const goldItem = getAllGoldItem(productId);

  console.log(goldItem);

  if (!goldItem) return null;

  return (
    <div className='container'>
      <div className='px-md-5 mt-4 mt-md-5'>
        <div className='row mb-4 text-start'>
          <div className='col-12'>
            <div
              className='btn btn-outline-primary text-sm'
              onClick={() => {
                router.replace('/home');
              }}>
              <span className='mx-2'>بازگشت</span>
              <i class='bi bi-arrow-left-square '></i>
            </div>
          </div>
        </div>
        <div className='row '>
          <div className='col-12 col-md-4 text-center mb-4 mb-md-0'>
            <Image alt='goldPhoto' src={goldPhoto} width={160} />
          </div>
          <div className='col-12 col-md-8'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <span className='fw-bold fs-5'>{goldItem.title}</span>
              </div>
              <div>
                <span className='text-gold'>
                  {toLocaleCurrencyString(goldItem.price, true)}
                </span>
              </div>
            </div>
            <div className='mt-4'>
              <div className='mb-3'>
                <DotList />
                <span className='mx-2'>فروشنده:</span>
                <span>{goldItem.saleman}</span>
              </div>
              <div className='mb-3'>
                <DotList />
                <span className='mx-2'>وزن:</span>
                <span>{goldItem.weight} گرم </span>
              </div>
              <div className='mb-3'>
                <DotList />
                <span className='mx-2'>عیار:</span>
                <span>{goldItem.ayar} </span>
              </div>
              <div className='mb-3'>
                <DotList />
                <span className='mx-2'>اجرت:</span>
                <span>{goldItem.ojrat}%</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row my-4 text-center justify-content-around'>
          <div className='col-12 col-md-4'>
            <span className='border-bottom border-2 pb-2 border-gold fw-bold'>
              معرفی محصول
            </span>
            <p className='my-4'>
              عکس نمایش داده شده صرفاً جهت نمایش محصول بوده و طلای دریافتی
              متفاوت خواهد بود.
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <span className='border-bottom border-2 pb-2 border-gold fw-bold'>
              نحوه دریافت
            </span>
            <p className='my-4'>
              دریافت طلا به صورت حضوری در فروشگاه و دفتر مرکزی گلدیس انجام می
              گردد.
            </p>
            <span className='btn btn-primary w-100'>خرید</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
