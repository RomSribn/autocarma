import React from 'react';
import { FormNewAccidentProps } from 'types/index';
import Form from './components/Form';
import './NewAccident.scss';

const NewAccident = ({
  setSubmitData,
  setCurrentMarker,
  markers,
  currentMarker,
  user,
}: FormNewAccidentProps) => (
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
