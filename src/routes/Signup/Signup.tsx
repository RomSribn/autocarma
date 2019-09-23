import React from 'react';
import { ISignUp } from './interface';
import Form from './components/Form';
import './Signup.scss';

const CreateUser = ({ signup, error, toggleLoader }: ISignUp) => {
  React.useEffect(() => {
    toggleLoader(false);
  }, [toggleLoader]);
  return (
    <div className="profile-form">
      <Form signup={signup} error={error} toggleLoader={toggleLoader} />
    </div>
  );
};

export default CreateUser;
