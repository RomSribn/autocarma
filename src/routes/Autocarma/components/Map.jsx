import React from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    const { markers } = props;
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: 49.988358,
          lng: 36.232845,
        }}
      >
        {props.isMarkerShown
          && markers.map(el => (
            <Marker
              key={el[0]}
              onDblClick={evt => `${evt.latLng.lat()} ${evt.latLng.lng()}`}
              position={el[1].coordinates}
            />
          ))}
      </GoogleMap>
    );
  }),
);

export default MyMapComponent;
