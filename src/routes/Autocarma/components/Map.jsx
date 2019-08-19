import React from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      onClick={(evt) => {
        const pnt = evt.latLng;
        let lat = pnt.lat();
        lat = lat.toFixed(4);
        let lng = pnt.lng();
        lng = lng.toFixed(4);
        console.log(`Latitude: ${lat}  Longitude: ${lng}`);
      }}
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />
      )}
    </GoogleMap>
  )),
);

export default MyMapComponent;
