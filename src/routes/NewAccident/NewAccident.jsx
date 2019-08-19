import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './NewAccident.scss';

const Autocarma = () => (
  <div className="create-accident-form">
    <Form />
  </div>
);

export default Autocarma;

Autocarma.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
