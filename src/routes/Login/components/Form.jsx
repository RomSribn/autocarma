import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import history from '../../../utils/history';

import validate from '../../../utils/validate';
import Input from './Input';
import './Form.scss';

const Form = ({ postIdeaCard }) => (
  <div className="form-login">
    <div className="login-title"><h1>Get started!</h1></div>
    <Formik
      initialValues={{
        email: '',
        passowrd: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        postIdeaCard(values).then(() => history.push('/'));
      }}
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

Form.propTypes = {
  postIdeaCard: PropTypes.func.isRequired,
  author: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
