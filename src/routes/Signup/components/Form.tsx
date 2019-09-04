import React from 'react';
import { SignUp } from 'types/index';
import { Formik, Field } from 'formik';
import { ValidateSignup } from 'utils/validate/validate';
import Error from '_assets/shared/Error/components/Error';
import Input from './Input';
import './Form.scss';

const Form = ({ signup, error }: SignUp) => (
  <div className="form-signup">
    {error ? <Error message={error} /> : null}
    <div className="signup-title">
      <h1>Create an account</h1>
    </div>
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={ValidateSignup}
      onSubmit={values => signup(values)}
    >
      {({
        values, handleChange, handleBlur, handleSubmit, setFieldValue,
      }) => (
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="inputs-signup">
            <div className="input-wrapper">
              <Field
                component={Input}
                type="text"
                name="username"
                label="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                setFieldValue={setFieldValue}
              />
            </div>

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
                setFieldValue={setFieldValue}
              />
            </div>

            <div className="input-wrapper">
              <Field
                component={Input}
                type="password"
                name="confirmPassword"
                label="Confirm password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                setFieldValue={setFieldValue}
              />
            </div>

            <button className="save-signup" type="submit">
              Create
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
