import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { ValidateLogin } from 'utils/validate/validate';
import Error from '_assets/shared/Error/components/Error';
import Input from './Input';
import './Form.scss';

const Form = ({ login, error }) => (
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
            <button className="save-login" type="submit" disabled={isSubmitting}>
              Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;

Form.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
