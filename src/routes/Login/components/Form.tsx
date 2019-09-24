import React from 'react';
import { Formik, Field } from 'formik';
import { ValidateLogin } from 'utils/validate/validate';
import history from 'utils/history';
import Error from '_assets/shared/Error/components/Error';
import { ILoginProps } from '../interface';
import { signup } from '../../variables';
import Input from './Input';
import './Form.scss';

const Form = ({ login, error, toggleLoader }: ILoginProps) => (
  <div className="form-login">
    {error ? <Error message={error} /> : null}
    <div className="login-title">
      <h1>Get started!</h1>
    </div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={ValidateLogin}
      onSubmit={values => login(values)}
    >
      {({
        values, handleChange, handleBlur, handleSubmit, setFieldValue,
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
                setFieldValue={setFieldValue}
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
                setFieldValue={setFieldValue}
                value={values.password}
              />
            </div>
            <button className="save-login" type="submit">
              Login
            </button>
            <p className="under-authorize" onClick={() => history.push(signup)}>
        Don't have an account?
      </p>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
