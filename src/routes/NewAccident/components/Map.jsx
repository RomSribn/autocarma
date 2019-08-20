import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    const { setMarkersCoordinates, coordinates, onChange } = props;
    return (
      <GoogleMap
        onClick={(evt) => {
          onChange('coordinates', 345987);
          setMarkersCoordinates(evt.latLng);
        }}
        defaultZoom={12}
        defaultCenter={{
          lat: 49.988358,
          lng: 36.232845,
        }}
      >
        {props.isMarkerShown
          && coordinates.map(el => (
            <Marker
              key={el.id}
              onDblClick={evt => console.log(`${evt.latLng.lat()} ${evt.latLng.lng()}`)}
              position={{ lat: el.lat, lng: el.lng }}
            />
          ))}
      </GoogleMap>
    );
  }),
);

const Map = ({
  field,
  onChange,
  coordinates,
  handleChange,
  label,
  type,
  form: { touched, errors },
  ...props
}) => (
  <MyMapComponent
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD65Oc0dbeVFWiWYDd8R5JpeiS0ogQKc0Y"
    loadingElement={<div style={{ height: '70%', margin: '0 0 auto' }} />}
    containerElement={<div style={{ height: '400px', width: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    coordinates={coordinates}
    onChange={handleChange}
    {...field}
    {...props}
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
