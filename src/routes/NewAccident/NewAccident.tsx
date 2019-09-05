import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import './NewAccident.scss';

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

interface NewAccidentProps {
  setCurrentMarker: () => void;
  setSubmitData: () => void;
  currentMarker: currentMarkerProps;
  markers: Array<MarkersProps>;
  user: {
    id: string;
    name: string;
  };
}

const NewAccident = ({
  setSubmitData,
  setCurrentMarker,
  markers,
  currentMarker,
  user,
}: NewAccidentProps) => (
  <div className="create-accident-form">
    <Form
      setSubmitData={setSubmitData}
      markers={markers}
      setCurrentMarker={setCurrentMarker}
      currentMarker={currentMarker}
      user={user}
    />
  </div>
);

export default NewAccident;
