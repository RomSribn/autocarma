import React from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    const { setMarkersCoordinates, coordinates } = props;
    return (
      <GoogleMap
        onClick={evt => setMarkersCoordinates(evt.latLng)}
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

export default MyMapComponent;
