import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const CustomField = ({ field, form: { touched, errors }, ...props }) => (
  <>
    <TextField
      id="filled-dense"
      margin="dense"
      variant="filled"
      {...field}
      {...props}
    />
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
};
