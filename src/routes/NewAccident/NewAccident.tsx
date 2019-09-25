import React from 'react';
import { IFormNewAccidentProps } from './interface';
import Form from './components/Form';
import './NewAccident.scss';

const NewAccident = ({
  setSubmitData,
  setCurrentMarker,
  markers,
  currentMarker,
  userCurrent,
}: IFormNewAccidentProps) => (
  <div className="create-accident-form">
    <Form
      setSubmitData={setSubmitData}
      markers={markers}
      setCurrentMarker={setCurrentMarker}
      currentMarker={currentMarker}
      userCurrent={userCurrent}
    />
  </div>
);

export default NewAccident;
