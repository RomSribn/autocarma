import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './Signup.scss';

interface CreateUserProps {
  signup: (values: object) => void;
  error: string;
}

const CreateUser = ({ signup, error }: CreateUserProps) => (
  <div className="profile-form">
    <Form signup={signup} error={error} />
  </div>
);

export default CreateUser;
