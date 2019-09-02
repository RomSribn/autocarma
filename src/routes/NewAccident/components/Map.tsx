import React from 'react';
import PropTypes from 'prop-types';
import { defaultConfig } from 'config';

import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

interface MarkersProps {
  id: number;
  type: string;
  license: string;
  time: string;
  rating: number;
}

interface currentMarkerProps {
  lat: number;
  lng: number;
}

interface FormProps {
  setCurrentMarker: (params: object) => void;
  setFieldValue: (key: string, value: any) => void;
  currentMarker: currentMarkerProps;
  markers: Array<MarkersProps>;
  user: string;
  isMarkerShown: boolean;
}

const MyMapComponent = withScriptjs(
  withGoogleMap((props: FormProps) => {
    const {
      markers, setFieldValue, setCurrentMarker, currentMarker,
    } = props;
    return (
      <GoogleMap
        onClick={(evt) => {
          const data = {
            lat: evt.latLng.lat(),
            lng: evt.latLng.lng(),
          };
          setCurrentMarker(data);
          setFieldValue('coordinates', data);
        }}
        defaultZoom={12}
        defaultCenter={{
          lat: 49.988358,
          lng: 36.232845,
        }}
      >
        {props.isMarkerShown
          && markers.map(el => (
            <Marker
              key={el.id}
              onDblClick={evt => `${evt.latLng.lat()} ${evt.latLng.lng()}`}
              position={el.coordinates}
            />
          ))}
        {currentMarker ? (
          <Marker
            onDblClick={evt => `${evt.latLng.lat()} ${evt.latLng.lng()}`}
            position={currentMarker}
          />
        ) : null}
      </GoogleMap>
    );
  }),
);

const Map = ({
  field,
  setFieldValue,
  setCurrentMarker,
  currentMarker,
  markers,
  label,
  type,
  ...props
}) => (
  <MyMapComponent
    {...field}
    {...props}
    isMarkerShown
    googleMapURL={defaultConfig.googleApiUrl}
    loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
    containerElement={<div style={{ height: '400px', width: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    setFieldValue={setFieldValue}
    setCurrentMarker={setCurrentMarker}
    currentMarker={currentMarker}
    markers={markers}
  />
);

export default Map;
