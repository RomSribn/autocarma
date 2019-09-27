import React from 'react';
import Form from './components/Form';
import './Profile.scss';

const CreateIdea = ({ updateProfile }) => (
  <div className="profile-form">
    <Form updateProfile={updateProfile} />
  </div>
);

export default CreateIdea;
