import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { refPostsDB, refUsersDB } from 'services/FirebaseDB';
import { refStorage } from 'services/FirebaseStorage';
import { accidents } from 'routes/variables';
import { CustomField, CustomFieldTextArea, SimpleSelect, CustomFileInput } from './Input';
import Map from './Map';
import './Form.scss';

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

interface FormProps {
  setCurrentMarker: () => void;
  setSubmitData: (array: Array<object>) => void;
  currentMarker: currentMarkerProps;
  markers: Array<MarkersProps>;
  user: {
    id: string;
    name: string;
  };
}

const Form = ({ setSubmitData, setCurrentMarker, markers, currentMarker, user }: FormProps) => {
  const onSubmit = values => {
    const postId = refPostsDB.push(values).key;
    setSubmitData([postId, values]);
    refUsersDB(user.id, postId).set({ ...values, id: postId });
    values.images.map(el => refStorage(postId, el));
    history.push(accidents);
  };
  return (
    <div className="form-new-accident-wrapper">
      <div className="form-new-accident-title">
        <span className="new-accident-title">New Accident</span>
      </div>
      <Formik
        initialValues={{
          type: '',
          license: '',
          model: '',
          description: '',
          time: '',
          coordinates: '',
          author: user.name,
          images: [],
        }}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit} className="new-accident-form">
            <div className="new-accident-inputs">
              <div className="inputs-col">
                <div className="input-wrapper left">
                  <Field
                    component={SimpleSelect}
                    type="text"
                    name="type"
                    label="Type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  />
                </div>
                <div className="input-wrapper">
                  <Field
                    component={CustomField}
                    type="text"
                    name="license"
                    label="License plate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.license}
                  />
                </div>
              </div>

              <div className="inputs-col">
                <div className="input-wrapper">
                  <Field
                    component={CustomField}
                    type="text"
                    name="model"
                    label="Car model"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.model}
                  />
                </div>
                <div className="input-wrapper">
                  <Field
                    component={CustomField}
                    type="date"
                    name="time"
                    label="Happened at"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                  />
                </div>
              </div>
            </div>
            <div className="inputs-col left">
              <div className="input-wrapper">
                <Field
                  component={CustomFieldTextArea}
                  type="textarea"
                  name="description"
                  label="Description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </div>
            </div>

            <div className="input-wrapper">
              <Field
                component={Map}
                type="textarea"
                name="coordinates"
                label="Description"
                setFieldValue={setFieldValue}
                onBlur={handleBlur}
                value={values.description}
                setSubmitData={setSubmitData}
                setCurrentMarker={setCurrentMarker}
                currentMarker={currentMarker}
                markers={markers}
              />
            </div>
            <div className="input-wrapper dropzone-wrapper">
              <Field
                component={CustomFileInput}
                name="description"
                label="Description"
                onChange={handleChange}
                setFieldValue={setFieldValue}
                onBlur={handleBlur}
                values={values}
              />
            </div>
            <button className="save-new-accident" type="submit">
              Save
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
