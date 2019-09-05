import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './Signup.scss';

const CreateUser = ({ signup, error }) => (
  <div className="profile-form">
    <Form signup={signup} error={error} />
  </div>
);

export default CreateUser;

CreateUser.propTypes = {
  signup: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
