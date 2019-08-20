import React from 'react';
import PropTypes from 'prop-types';
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
          // setMarkersCoordinates(evt.latLng);
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
              onDblClick={evt => console.log(`${evt.latLng.lat()} ${evt.latLng.lng()}`)}
              position={el.coordinates}
            />
          ))}
        {currentMarker ? (
          <Marker
            onDblClick={evt => console.log(`${evt.latLng.lat()} ${evt.latLng.lng()}`)}
            position={currentMarker}
          />
        ) : null}
      </GoogleMap>
    );
  }),
);

const Map = ({
  field,
  coordinates,
  setFieldValue,
  setCurrentMarker,
  currentMarker,
  label,
  type,
  form: { touched, errors },
  ...props
}) => (
  <MyMapComponent
    {...field}
    {...props}
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD65Oc0dbeVFWiWYDd8R5JpeiS0ogQKc0Y"
    loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
    containerElement={<div style={{ height: '400px', width: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    coordinates={coordinates}
    setFieldValue={setFieldValue}
    setCurrentMarker={setCurrentMarker}
    currentMarker={currentMarker}
  />
);

export default Map;

const field = {
  onChange: PropTypes.func.isRequired,
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
};

Map.propTypes = field;
