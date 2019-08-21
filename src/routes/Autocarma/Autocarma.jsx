import React from 'react';
import PropTypes from 'prop-types';
import { defaultConfig } from 'config';
import Map from './components/Map';
import './Autocarma.scss';

<<<<<<< HEAD
=======
console.log(`https://maps.googleapis.com/maps/api/js?key=${defaultConfig.googleApiKey}`);
debugger;
>>>>>>> db-setup
const Autocarma = ({ markers }) => (
  <div className="autocarma-content">
    <Map
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${defaultConfig.googleApiKey}`}
      loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
      containerElement={<div style={{ height: '400px', width: '70%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      markers={markers}
    />
  </div>
);

export default Autocarma;

Autocarma.propTypes = {
  markers: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
