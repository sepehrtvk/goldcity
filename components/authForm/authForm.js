import React, { useState } from 'react';
import { convertNumbersToEnglish } from '../../common/Localization';
import ReactCodeInput from 'react-code-input';

const AuthForm = () => {
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState('mobile');

  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (step == 'mobile') {
      if (mobile.length == 11) setStep('code');
      return;
    } else {
      console.log(mobile);
      console.log(code);
    }
  };

  if (step == 'mobile')
    return (
      <form onSubmit={submitForm}>
        <div className='card'>
          <div className='card-body'>
            <div className='mb-3'>
              <label htmlFor='mobile' className='form-label'>
                موبایل
              </label>
              <input
                value={mobile}
                type='text'
                className='form-control text-start'
                id='mobile'
                maxLength={11}
                onChange={(e) => {
                  const value = convertNumbersToEnglish(e.target.value);
                  const re = /^[0-9\b]+$/;

                  if (value === '' || re.test(value)) {
                    setMobile(value);
                  }
                }}
              />
            </div>

            <button type='submit' className='btn btn-primary w-100'>
              ارسال رمز یکبار مصرف
            </button>
          </div>
        </div>
      </form>
    );
  else
    return (
      <form onSubmit={submitForm}>
        <div className='card'>
          <div className='card-body'>
            <div className='mb-3'>
              <label htmlFor='inputCode' className='form-label'>
                رمز یکبار مصرف
              </label>
              <ReactCodeInput
                autoFocus
                value={code}
                inputMode='numeric'
                name='inputCode'
                type='text'
                fields={6}
                inputStyle={{
                  width: 48,
                  height: 48,
                  textAlign: 'center',
                  margin: 16,
                  borderColor: '#006063',
                  borderRadius: '0.375rem',
                  backgroundColor: '#f5f5f5',
                }}
                className='d-flex flex-row-reverse justify-content-center'
                onChange={(e) => {
                  const value = convertNumbersToEnglish(e);
                  const re = /^[0-9\b]+$/;

                  if (value === '' || re.test(value)) {
                    setCode(value);
                  }
                }}
              />
            </div>

            <button type='submit' className='btn btn-primary w-100'>
              ورود
            </button>
          </div>
        </div>
      </form>
    );
};

export default AuthForm;
