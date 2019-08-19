import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { ValidateProfile } from 'utils/validate/validate';
import Input from './Input';
import './Form.scss';

const Form = ({ postIdeaCard }) => (
  <div className="form-new-accident-wrapper">
    <div className="form-new-accident-title">
      <h1>New Accident</h1>
    </div>
    <Formik
      initialValues={{
        username: '',
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={ValidateProfile}
      onSubmit={(values) => {
        postIdeaCard(values).then(() => history.push('/'));
      }}
    >
      {({
        values, handleChange, handleBlur, handleSubmit, isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="new-accident-form">
          <div className="new-accident-inputs">
            <div className="inputs-col">
              <div className="input-wrapper">
                <Field
                  component={Input}
                  type="text"
                  name="username"
                  label="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
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
                />
              </div>
            </div>

            <div className="inputs-col">
              <div className="input-wrapper">
                <Field
                  component={Input}
                  type="password"
                  name="oldPassword"
                  label="Old Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.oldPassword}
                />
              </div>
              <div className="input-wrapper">
                <Field
                  component={Input}
                  type="password"
                  name="newPassword"
                  label="New Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                />
              </div>
            </div>
          </div>
          <button className="save-new-accident" type="submit" disabled={isSubmitting}>
            Save
          </button>
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
