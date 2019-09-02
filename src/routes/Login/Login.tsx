import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './Login.scss';

interface LoginProps {
  login: (values: object) => void;
  error: string;
}

const Login = ({ login, error }: LoginProps) => (
  <div className="profile-form">
    <Form login={login} error={error} />
  </div>
);

export default Login;
