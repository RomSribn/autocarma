import React from 'react';
import { Formik, Field } from 'formik';
import { ValidateProfile } from 'utils/validate/validate';
import Input from './Input';
import './Form.scss';

const Form = () => (
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
      onSubmit={() => {}}
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
                name="oldPassword"
                label="Old Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.oldPassword}
                setFieldValue={setFieldValue}
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
                setFieldValue={setFieldValue}
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
                value={values.confirmPassword}
                setFieldValue={setFieldValue}
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
