import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { CustomField, CustomFieldTextArea, SimpleSelect } from './Input';
import './Form.scss';

const Form = () => (
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
      }}
      // validationSchema={ValidateProfile}
      onSubmit={(values) => {
        // postIdeaCard(values).then(() => history.push('/'));
        console.log(values);
      }}
    >
      {({
        values, handleChange, handleBlur, handleSubmit, isSubmitting,
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
  author: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
