import React from 'react';
import PropTypes from 'prop-types';
import { defaultConfig } from 'config';
import Map from './components/Map';
import Carousel from './components/Carousel';
import './Autocarma.scss';

const Autocarma = ({ markers }) => (
  <div className="autocarma-content">
<<<<<<< HEAD
    <div className="autocarma-map">
      <span className="map-title">Accidents map</span>
      <Map
        isMarkerShown
        googleMapURL={defaultConfig.googleApiUrl}
        loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
        containerElement={<div style={{ height: '400px', width: '70%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        markers={markers}
      />
    </div>
    <div className="autocarma-carousel">
      <span className="carousel-title">Last 10 accidents</span>
      <Carousel markers={markers} />
    </div>
=======
    <Map
      isMarkerShown
      googleMapURL={defaultConfig.googleApiUrl}
      loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
      containerElement={<div style={{ height: '400px', width: '70%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      markers={markers}
    />
>>>>>>> 56692bb4876071864cb36fb4ef631cf08248c37b
  </div>
);

export default Autocarma;

Autocarma.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      license: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
