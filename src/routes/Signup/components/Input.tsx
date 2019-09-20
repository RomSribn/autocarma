import React from 'react';
import { IFilterSelectsProps } from 'interfaces';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import './Input.scss';

export const CustomField = ({
  field,
  label,
  type,
  setFieldValue,
  form: { touched, errors },
  ...props
}: IFilterSelectsProps) => {
  const classNameCntrl = field.value ? 'visible' : null;
  const isError = touched[field.name] && errors[field.name];
  return (
    <>
      <div className="label">
        <label htmlFor={label}>
          {label}
          <br />
          <input id={label} type={type} className="new-accident-input" {...field} {...props} />
        </label>
        <i className="filled" />
        <div>
          <Clear
            className={`cross ${classNameCntrl}`}
            onClick={() => setFieldValue(field.name, '')}
          />
        </div>
        <div>
          <Check className="filled" />
        </div>
      </div>
      {isError && <div className="error">{errors[field.name]}</div>}
    </>
  );
};

export default CustomField;
