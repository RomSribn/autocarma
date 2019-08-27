import React from 'react';
import PropTypes from 'prop-types';
import Map from 'routes/Autocarma/components/Map';
import { defaultConfig } from 'config';
import ViewPageTable from './ViewPageTable';

const ViewPage = ({ markers }) => (
  <div className="viewpage">
    <ViewPageTable {...markers[0][1]} />
    <ul className="viewpage-media">
      <li className="media-item">
        <Map
          isMarkerShown
          googleMapURL={defaultConfig.googleApiUrl}
          loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
          containerElement={<div style={{ height: '400px', width: '70%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          markers={markers}
        />
      </li>
      <li className="media-item">1</li>
    </ul>
  </div>
);

export default ViewPage;

ViewPage.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      license: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
