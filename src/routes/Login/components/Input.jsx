import React from 'react';
import PropTypes from 'prop-types';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import './Input.scss';

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
          className="login-input"
          {...field}
          {...props}
        />
      </label>
      <i className="filled" />
      <div><Clear className="cross" /></div>
      <div><Check className="filled" /></div>
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
