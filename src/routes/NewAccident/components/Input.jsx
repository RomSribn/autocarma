import React from 'react';
import PropTypes from 'prop-types';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import Dropzone from 'react-dropzone';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Thumb from './Thumb';
import './Input.scss';

export const CustomField = ({
  field, label, type, form: { touched, errors }, ...props
}) => (
  <>
    <div className="label">
      <label htmlFor={label}>
        {label}
        <br />
        <input id={label} type={type} className="new-accident-input" {...field} {...props} />
      </label>
      <i className="filled" />
      <div>
        <Clear className="cross" />
      </div>
      <div>
        <Check className="filled" />
      </div>
    </div>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </>
);

export const CustomFieldTextArea = ({
  field,
  label,
  type,
  form: { touched, errors },
  ...props
}) => (
  <>
    <label htmlFor={label}>
      {label}
      <TextareaAutosize
        id={label}
        className="inputs-textarea"
        rows="12"
        rowsMax="12"
        {...field}
        {...props}
      />
    </label>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </>
);

export const SimpleSelect = ({
  field, label, type, form: { touched, errors }, ...props
}) => (
  <div className="label">
    <label htmlFor={label}>
      {label}
      <br />
      <select
        id={label}
        className="form-item__element form-item__element--select select"
        required
        {...field}
        {...props}
      >
        <option disabled selected value="">
          Select type
        </option>
        <option value="Parking law">Parking law</option>
        <option value="Smth else">Smth else</option>
      </select>
    </label>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

export const CustomFileInput = ({
  field, setFieldValue, values, form: { touched, errors },
}) => (
  <>
    <Dropzone
      accept="image/*"
      onDrop={(acceptedFiles) => {
        // do nothing if no files
        if (acceptedFiles.length === 0) {
          return;
        }
        setFieldValue('images', values.images.concat(acceptedFiles));
      }}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <>
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
          </div>
          <br />
          <div className="dropzone-images">
            {values.images.length
              ? values.images.map(file => <Thumb key={values.id} file={file} />)
              : null}
          </div>
        </>
      )}
    </Dropzone>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </>
);

const field = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

CustomField.propTypes = field;
CustomFieldTextArea.propTypes = field;
SimpleSelect.propTypes = field;
CustomFileInput.propTypes = {
  ...field,
  setFieldValue: PropTypes.func.isRequired,
};
