import React from 'react';
import { SimpleTableProps } from 'types/index';
import { defaultConfig } from 'config';
import Map from './components/Map';
import Carousel from './components/Carousel';
import MobileCarousel from './components/MobileCarousel';
import './Autocarma.scss';

const Autocarma = ({ markers }: SimpleTableProps) => {
  const width = window.innerWidth;
  const mapWidth = width > 800 ? '70%' : '100%';
  return (
    <div className="autocarma-content">
      <div className="autocarma-map">
        <span className="map-title">Accidents map</span>
        <Map
          isMarkerShown
          googleMapURL={defaultConfig.googleApiUrl}
          loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
          containerElement={<div style={{ height: '400px', width: mapWidth }} />}
          mapElement={<div style={{ height: '100%' }} />}
          markers={markers}
        />
      </div>
      <div className="autocarma-carousel">
        <span className="carousel-title">Last 10 accidents</span>
        {width > 800 ? <Carousel markers={markers} /> : <MobileCarousel markers={markers} />}
      </div>
    </div>
  );
};

export default Autocarma;
