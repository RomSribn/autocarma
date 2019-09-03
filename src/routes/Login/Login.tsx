import React from 'react';
import { LoginProps } from 'types/index';
import Form from './components/Form';
import './Login.scss';

const Login = ({ login, error }: LoginProps) => (
  <div className="profile-form">
    <Form login={login} error={error} />
  </div>
);

export default Login;
