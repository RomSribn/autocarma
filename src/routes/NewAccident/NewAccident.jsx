import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './NewAccident.scss';

const NewAccident = ({ setMarkersCoordinates, coordinates }) => (
  <div className="create-accident-form">
    <Form setMarkersCoordinates={setMarkersCoordinates} coordinates={coordinates} />
  </div>
);

export default NewAccident;

NewAccident.propTypes = {
  setMarkersCoordinates: PropTypes.func.isRequired,
  coordinates: PropTypes.shape({
    id: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
