import React from 'react';
import { FilterSelectsProps } from 'types/index';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import './Input.scss';

const CustomField = ({
  field,
  label,
  type,
  setFieldValue,
  form: { touched, errors },
  ...props
}: FilterSelectsProps) => {
  const classNameCntrl = field.value ? 'visible' : null;
  return (
    <>
      <div className="label">
        <label htmlFor={label}>{label}</label>
        <input id={label} type={type} className="login-input" {...field} {...props} />

        <Clear
          className={`cross ${classNameCntrl}`}
          onClick={() => setFieldValue(field.name, '')}
        />
        <Check className="filled" />
      </div>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </>
  );
};

export default CustomField;
