import React, { useEffect, useState } from 'react';
import AuthForm from '../../components/authForm/authForm';
import classes from './login.module.css';
import SnackBar from '../../components/ui/snackBar';

const LoginPage = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 1500);
    }
  }, [message]);

  return (
    <>
      <div className={classes['box-form']}>
        <div className='container'>
          <div className='row justify-content-center mt-5'>
            <div className='col-12 col-md-5 '>
              <h2 className='mb-5 text-center'>گلدسیتی </h2>
              <p className='text-end'>به گلدسیتی خوش آمدید</p>
              <AuthForm setMessage={setMessage} />
            </div>
          </div>
        </div>
      </div>
      <SnackBar
        message={message && message.message}
        success={message && message.success}
      />
    </>
  );
};

export default LoginPage;
