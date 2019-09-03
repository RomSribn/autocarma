import React from 'react';
import { SimpleTableProps } from 'types/index';
import { defaultConfig } from 'config';
import Map from './components/Map';
import Carousel from './components/Carousel';
import './Autocarma.scss';

const Autocarma = ({ markers }: SimpleTableProps) => (
  <div className="autocarma-content">
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
  </div>
);

export default Autocarma;
