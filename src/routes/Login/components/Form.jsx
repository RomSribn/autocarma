import React from 'react';
import { Formik, Field } from 'formik';
import { auth } from 'firebase/app';
import history from 'utils/history';


import { ValidateLogin } from 'utils/validate';
import Input from './Input';
import './Form.scss';

const authFnc = values => auth().signInWithEmailAndPassword(values.email, values.password).then(() => history.push('/accidents'));

const Form = () => (
  <div className="form-login">
    <div className="login-title"><h1>Get started!</h1></div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={ValidateLogin}
      onSubmit={values => authFnc(values)}
    >
      {({
        values, handleChange, handleBlur, handleSubmit, isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="login-form">
          <div className="inputs-login">

            <div className="input-wrapper">
              <Field
                component={Input}
                type="email"
                name="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>

            <div className="input-wrapper">
              <Field
                component={Input}
                type="password"
                name="password"
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <button
              className="save-login"
              type="submit"
              disabled={isSubmitting}
            >
            Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
