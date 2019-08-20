import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './NewAccident.scss';

const NewAccident = ({
  setSubmitData, setCurrentMarker, markers, currentMarker,
}) => (
  <div className="create-accident-form">
    <Form
      setSubmitData={setSubmitData}
      markers={markers}
      setCurrentMarker={setCurrentMarker}
      currentMarker={currentMarker}
    />
  </div>
);

export default NewAccident;

NewAccident.propTypes = {
  setSubmitData: PropTypes.func.isRequired,
  setCurrentMarker: PropTypes.func.isRequired,
  markers: PropTypes.shape({
    id: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
