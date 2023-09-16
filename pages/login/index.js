import React from 'react';
import AuthForm from '../../components/authForm/authForm';
import classes from './login.module.css';

const LoginPage = () => {
  return (
    <div className={classes['box-form']}>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-12 col-md-5 '>
            <h2 className='mb-5 text-center'> گلدسیتی </h2>
            <p className='text-end'>به گلدسیتی خوش آمدید</p>
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
