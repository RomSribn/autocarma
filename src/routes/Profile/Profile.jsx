import React from 'react';
import PropTypes from 'prop-types';


import Form from './components/Form';

import './Profile.css';

const CreateIdea = ({ postIdeaCard, user }) => (
  <div className="profile-form">
    <Form postIdeaCard={postIdeaCard} author={user} />
  </div>
);

export default CreateIdea;

CreateIdea.propTypes = {
  postIdeaCard: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
