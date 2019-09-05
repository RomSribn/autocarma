import React from 'react';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import './Input.scss';

interface fieldProps {
  name: string;
  value: string;
  onChange: () => void;
  onBlur: () => void;
}

interface formProps {
  touched: object;
  errors: object;
}

interface CustomFieldProps {
  field: fieldProps;
  form: formProps;
  label: string;
  type: string;
}

const CustomField = ({
  field,
  label,
  type,
  form: { touched, errors },
  ...props
}: CustomFieldProps) => (
  <>
    <div className="label">
      <label htmlFor={label}>
        {label}
        <br />
        <input id={label} type={type} className="profile-input" {...field} {...props} />
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

export default CustomField;
