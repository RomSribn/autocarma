import React from 'react';
import { ILoginProps } from './interface';
import Form from './components/Form';
import './Login.scss';

const Login = ({ login, error }: ILoginProps) => (
  <div className="profile-form">
    <Form login={login} error={error} />
  </div>
);

export default Login;
