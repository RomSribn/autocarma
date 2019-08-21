import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './NewAccident.scss';

const NewAccident = ({
<<<<<<< HEAD
  setSubmitData, setCurrentMarker, markers, currentMarker,
=======
  setSubmitData, setCurrentMarker, markers, currentMarker, user,
>>>>>>> db-setup
}) => (
  <div className="create-accident-form">
    <Form
      setSubmitData={setSubmitData}
      markers={markers}
      setCurrentMarker={setCurrentMarker}
      currentMarker={currentMarker}
<<<<<<< HEAD
=======
      user={user}
>>>>>>> db-setup
    />
  </div>
);

export default NewAccident;

NewAccident.propTypes = {
  setSubmitData: PropTypes.func.isRequired,
  setCurrentMarker: PropTypes.func.isRequired,
  currentMarker: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      license: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
<<<<<<< HEAD
=======
  author: PropTypes.string.isRequired,
>>>>>>> db-setup
};
