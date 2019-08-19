import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './Login.scss';

const Login = ({ login, error }) => (
  <div className="profile-form">
    <Form login={login} error={error} />
  </div>
);

export default Login;


Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
