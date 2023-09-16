import Api from '..';
import { convertNumbersToEnglish } from '../../common/Localization';

export const loginByPassword = (body) => {
  body.username = convertNumbersToEnglish(body.username);
  body.password = convertNumbersToEnglish(body.password);
  return new Api().post('login', {
    body,
  });
};

export const changePassword = (body) => {
  body.oldpassword = convertNumbersToEnglish(body.oldpassword);
  body.newpassword = convertNumbersToEnglish(body.newpassword);
  return new Api({
    bodyType: 'json',
  }).post('.api/v1/changepassword', {
    body,
  });
};

export const getOTPcode = (phone) => {
  phone = convertNumbersToEnglish(phone);
  return new Api().get('.api/v1/getotp/' + phone);
};

export const loginByOTPcode = (body) => {
  body.phone = convertNumbersToEnglish(body.phone);
  body.otp = convertNumbersToEnglish(body.otp);
  return new Api({
    bodyType: 'json',
  }).post('otplogin', {
    body,
  });
};

export const getUserMe = () => {
  return new Api().get('.api/v1/user/me');
};
