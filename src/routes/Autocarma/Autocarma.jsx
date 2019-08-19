import React from 'react';
import PropTypes from 'prop-types';
import Map from './components/Map';
import './Autocarma.scss';

const Autocarma = ({ setMarkersCoordinates, coordinates }) => (
  <div className="autocarma-content">
    <Map
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD65Oc0dbeVFWiWYDd8R5JpeiS0ogQKc0Y"
      loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
      containerElement={<div style={{ height: '400px', width: '70%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      setMarkersCoordinates={setMarkersCoordinates}
      coordinates={coordinates}
    />
  </div>
);

export default Autocarma;

Autocarma.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  setMarkersCoordinates: PropTypes.func.isRequired,
};
