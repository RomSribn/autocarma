import React from 'react';
import { SignUp } from 'types/index';
import Form from './components/Form';
import './Signup.scss';

const CreateUser = ({ signup, error }: SignUp) => (
  <div className="profile-form">
    <Form signup={signup} error={error} />
  </div>
);

export default CreateUser;
