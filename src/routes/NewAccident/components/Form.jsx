import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { CustomField, CustomFieldTextArea, SimpleSelect } from './Input';
import Map from './Map';
import './Form.scss';

const Form = ({ setMarkersCoordinates, coordinates }) => (
  <div className="form-new-accident-wrapper">
    <div className="form-new-accident-title">
      <h1>New Accident</h1>
    </div>
    <Formik
      initialValues={{
        type: '',
        license: '',
        model: '',
        description: '',
        time: '',
        coordinates: '',
      }}
      // validationSchema={ValidateProfile}
      onSubmit={(values, actions) => {
        // postIdeaCard(values).then(() => history.push('/'));
        console.log(actions);

        console.log(values);
      }}
    >
      {({
        values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue,
      }) => (
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
              name="description"
              label="Description"
              onBlur={handleBlur}
              value={values.description}
              setMarkersCoordinates={setMarkersCoordinates}
              coordinates={coordinates}
              onChange={handleChange}
            />
          </div>
          <button className="save-new-accident" type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;

Form.propTypes = {
  setMarkersCoordinates: PropTypes.func.isRequired,
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
