import React from 'react';
import { Formik, Field } from 'formik';
import { ValidateProfile } from 'utils/validate/validate';
import Input from './Input';
import './Form.scss';

const Form = ({ updateProfile }) => (
  <div className="form">
    <div>
      <span className="profile-title">Personal Information</span>
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
        updateProfile(values);
      }}
    >
      {({
        values, handleChange, handleBlur, handleSubmit, setFieldValue,
      }) => (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="inputs-profile">
            <div className="input-wrapper">
              <Field
                component={Input}
                type="text"
                name="username"
                label="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                setFieldValue={setFieldValue}
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
                setFieldValue={setFieldValue}
                value={values.email}
              />
            </div>

            <div className="input-wrapper">
              <Field
                component={Input}
                type="password"
                name="oldPassword"
                label="Old Password"
                onChange={handleChange}
                onBlur={handleBlur}
                setFieldValue={setFieldValue}
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
                setFieldValue={setFieldValue}
                value={values.newPassword}
              />
            </div>

            <div className="input-wrapper">
              <Field
                component={Input}
                type="password"
                name="confirmPassword"
                label="Confirm New Password"
                onChange={handleChange}
                onBlur={handleBlur}
                setFieldValue={setFieldValue}
                value={values.confirmPassword}
              />
            </div>

            <button className="save-profile" type="submit">
              Save
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
