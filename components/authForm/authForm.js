import React, { useState } from 'react';
import { convertNumbersToEnglish } from '../../common/Localization';
import ReactCodeInput from 'react-code-input';
import { getOTPcode, getUserMe, loginByOTPcode } from '../../api/user';
import { finalize } from 'rxjs';
import Spinner from '../ui/spinner';
import { useRouter } from 'next/router';
import { signIn } from '../../redux/slices/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';

const AuthForm = ({ setMessage }) => {
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState('mobile');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const sendCode = (mobile) => {
    getOTPcode(mobile)
      .pipe(finalize(() => setIsLoading(false)))
      .subscribe({
        next: (result) => {
          if (result.status == '1') {
            setMessage({
              message: 'کد به شماره ' + mobile + ' ارسال شد.',
              success: true,
            });
            setStep('code');
          } else {
            setMessage({
              message: 'شماره موبایل یافت نشد.',
              success: false,
            });
          }
        },
        error: (err) => {
          setMessage({
            message: err.message,
            success: false,
          });
        },
      });
  };

  const loginBycode = (mobile, code) => {
    loginByOTPcode({ mobile: mobile, otp: code })
      .pipe(finalize(() => setIsLoading(false)))
      .subscribe({
        next: (result) => {
          if (result.access_token) {
            localStorage.setItem('access_token', result['access_token']);
            setIsLoading(true);

            getUserMe()
              .pipe(finalize(() => setIsLoading(false)))
              .subscribe({
                next: (res) => {
                  dispatch(
                    signIn({
                      phone: mobile,
                      fullname: res.full_name,
                      firstName: res.first_name,
                      lastName: res.last_name,
                      managerUid: res.mobile,
                    })
                  );

                  if (res.status == '1') {
                    setMessage('شما با موفقیت وارد شدید.');

                    router.replace('/home');
                  }
                },
                error: (err) => {
                  setMessage(err.message);
                },
              });
          } else {
            if (result.message) {
              setMessage(result.message);
            }
          }
        },
        error: (err) => {
          setMessage(err.message);
        },
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (step == 'mobile') {
      if (mobile.length == 11) {
        setIsLoading(true);
        sendCode(mobile);
      }
      return;
    } else {
      setIsLoading(true);
      loginBycode(mobile, code);
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

            <button
              type='submit'
              disabled={isLoading}
              className='btn btn-primary w-100'>
              <span>ارسال رمز یکبار مصرف</span>
              {isLoading && <Spinner />}
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

            <button
              type='submit'
              className='btn btn-primary w-100'
              disabled={isLoading}>
              <span>ورود</span>
              {isLoading && <Spinner />}
            </button>
          </div>
        </div>
      </form>
    );
};

export default AuthForm;
