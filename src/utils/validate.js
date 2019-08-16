import * as Yup from 'yup';

export const ValidateSignup = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  email: Yup.string()
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .matches(/[?=.*[a-z]/, 'The string must contain at least 1 lowercase alphabetical character')
    .matches(/[?=.*[A-Z]/, 'The string must contain at least 1 uppercase alphabetical character')
    .matches(/[?=.*[0-9]/, 'The string must contain at least 1 numeric character')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
  // getting possible to confirm password in the sortest form
    // eslint-disable-next-line func-names
    .test('passwords-match', 'Passwords must match ya fool', function (value) {
      return this.parent.password === value;
    }),
});

export const ValidateLogin = Yup.object().shape({
  email: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

export const ValidateProfile = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  email: Yup.string()
    .required('Required'),
  oldPassword: Yup.string()
    .required('Required!'),
  newPassword: Yup.string()
    .min(6, 'Too Short!')
    .matches(/[?=.*[a-z]/, 'The string must contain at least 1 lowercase alphabetical character')
    .matches(/[?=.*[A-Z]/, 'The string must contain at least 1 uppercase alphabetical character')
    .matches(/[?=.*[0-9]/, 'The string must contain at least 1 numeric character')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
  // getting possible to confirm password in the sortest form
    // eslint-disable-next-line func-names
    .test('passwords-match', 'Passwords must match ya fool', function (value) {
      return this.parent.newPassword === value;
    }),
});
