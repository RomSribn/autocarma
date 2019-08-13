import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';


const CustomField = ({
  field, label, type, form: { touched, errors }, ...props
}) => (
  <>
    <div className="label">

      <label htmlFor={label}>
        {label}
        <br />
        <input
          id={label}
          type={type}
          className="profile-input"
          {...field}
          {...props}
        />
      </label>


      <i className="filled" />
      <i className="cross" />
    </div>
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </>
);

export default CustomField;

CustomField.propTypes = {
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
