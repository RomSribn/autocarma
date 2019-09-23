import React from 'react';
import { ILoginProps } from './interface';
import Form from './components/Form';
import './Login.scss';

const Login = ({ login, error, toggleLoader }: ILoginProps) => {
  React.useEffect(() => {
    toggleLoader(false);
  }, [toggleLoader]);
  return (
    <div className="profile-form">
      <Form login={login} error={error} toggleLoader={toggleLoader} />
    </div>
  );
};

export default Login;
