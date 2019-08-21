import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
import { defaultConfig } from 'config';
>>>>>>> db-setup
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
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
<<<<<<< HEAD
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD65Oc0dbeVFWiWYDd8R5JpeiS0ogQKc0Y"
=======
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${defaultConfig.googleApiKey}`}
>>>>>>> db-setup
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

const field = {
  setFieldValue: PropTypes.func.isRequired,
  setCurrentMarker: PropTypes.func.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      license: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
  currentMarker: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

Map.propTypes = field;
