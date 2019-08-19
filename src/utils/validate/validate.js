import * as Yup from 'yup';
import {
  requiredMsg,
  shortMsg,
  passwordMatchMsg,
  passwordLowerMsg,
  passwordUpperMsg,
  passwordNumericMsg,
} from './constants';

const passwordCheck = Yup.string()
  .min(6, shortMsg)
  .matches(/[?=.*[a-z]/, passwordLowerMsg)
  .matches(/[?=.*[A-Z]/, passwordUpperMsg)
  .matches(/[?=.*[0-9]/, passwordNumericMsg)
  .required(requiredMsg);

export const ValidateSignup = Yup.object().shape({
  username: Yup.string().required(requiredMsg),
  email: Yup.string().required(requiredMsg),
  password: passwordCheck,
  confirmPassword: Yup.string()
    .required(requiredMsg)
    // getting possible to confirm password in the sortest form
    // eslint-disable-next-line func-names
    .test('passwords-match', passwordMatchMsg, function (value) {
      return this.parent.password === value;
    }),
});

export const ValidateLogin = Yup.object().shape({
  email: Yup.string().required(requiredMsg),
  password: Yup.string().required(requiredMsg),
});

export const ValidateProfile = Yup.object().shape({
  username: Yup.string().required(requiredMsg),
  email: Yup.string().required(requiredMsg),
  oldPassword: Yup.string().required(requiredMsg),
  newPassword: passwordCheck,
  confirmPassword: Yup.string()
    .required(requiredMsg)
    // getting possible to confirm password in the sortest form
    // eslint-disable-next-line func-names
    .test('passwords-match', passwordMatchMsg, function (value) {
      return this.parent.newPassword === value;
    }),
});
