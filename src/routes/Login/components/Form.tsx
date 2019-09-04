import React from 'react';
import { Formik, Field } from 'formik';
import { ValidateLogin } from 'utils/validate/validate';
import { LoginProps } from 'types/index';
import Error from '_assets/shared/Error/components/Error';
import Input from './Input';
import './Form.scss';

const Form = ({ login, error }: LoginProps) => (
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
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
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
                setFieldValue={setFieldValue}
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
            <button className="save-login" type="submit">
              Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
