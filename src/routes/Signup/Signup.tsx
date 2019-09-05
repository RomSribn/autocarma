import React from 'react';
import { ISignUp } from './interface';
import Form from './components/Form';
import './Signup.scss';

const CreateUser = ({ signup, error }: ISignUp) => (
  <div className="profile-form">
    <Form signup={signup} error={error} />
  </div>
);

export default CreateUser;
