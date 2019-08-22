import React from 'react';
import PropTypes from 'prop-types';
import { defaultConfig } from 'config';
import Map from './components/Map';
import './Autocarma.scss';

const Autocarma = ({ markers }) => (
  <div className="autocarma-content">
    <Map
      isMarkerShown
      googleMapURL={defaultConfig.googleApiUrl}
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
