import React from 'react';
import { ViewPageProps } from 'types/index';
import Map from 'routes/Autocarma/components/Map';
import { defaultConfig } from 'config';
import ViewPageTable from './components/ViewPageTable';
import Slider from './components/Slider';
import './ViewPage.scss';

const ViewPage: React.FC<ViewPageProps> = ({ markers, images, currentId }: ViewPageProps) => {
  const currentMarker = markers.filter(el => el[0] === currentId);
  return (
    <>
      <span className="viewpage-title">
        Accident
        {currentId}
      </span>
      <div className="viewpage">
        <ViewPageTable {...currentMarker[0][1]} />
        <ul className="viewpage-media">
          <li className="media-item">
            <Map
              isMarkerShown
              googleMapURL={defaultConfig.googleApiUrl}
              loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
              containerElement={<div style={{ height: '400px', width: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              markers={currentMarker}
            />
          </li>
          <li className="media-item">
            <Slider images={images} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ViewPage;
