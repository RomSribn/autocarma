import * as Yup from 'yup';

const passwordCheck = Yup.string()
  .min(6, 'Too Short!')
  .matches(/[?=.*[a-z]/, 'The string must contain at least 1 lowercase alphabetical character')
  .matches(/[?=.*[A-Z]/, 'The string must contain at least 1 uppercase alphabetical character')
  .matches(/[?=.*[0-9]/, 'The string must contain at least 1 numeric character')
  .required('Required');

const requiredMsg = 'Sorry, but it`s field is required';
const passwordMatchMsg = 'Passwords must match ya fool';

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
