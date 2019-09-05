import React from 'react';
import { IFormNewAccidentProps } from './interface';
import Form from './components/Form';
import './NewAccident.scss';

const NewAccident = ({
  setSubmitData,
  setCurrentMarker,
  markers,
  currentMarker,
  user,
}: IFormNewAccidentProps) => (
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
