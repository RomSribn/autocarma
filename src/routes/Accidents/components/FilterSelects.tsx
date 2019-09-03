import React from 'react';
import { FilterSelectsProps } from 'types/index';

export const FilterSelectType = ({
  field,
  label,
  type,
  form: { touched, errors },
  ...props
}: FilterSelectsProps) => (
  <>
    <label htmlFor={label}>
      {label}
      <select
        id="selectAccident"
        className="form-item__element form-item__element--select"
        {...field}
        {...props}
      >
        <option disabled selected value="">
          Please select value
        </option>
        <option value="Parking law">Parking law</option>
        <option value="Smth else">Smth else</option>
        <option value="">All</option>
      </select>
    </label>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </>
);

export const FilterSelectTime = ({
  field,
  label,
  type,
  form: { touched, errors },
  ...props
}: FilterSelectsProps) => (
  <>
    <label htmlFor={label}>
      {label}
      <select
        id="selectAccident"
        className="form-item__element form-item__element--select"
        {...field}
        {...props}
      >
        <option disabled selected value="">
          Please select value
        </option>
        <option value="Recently added">Recently added</option>
        <option value="For last month">For last month</option>
        <option value="For last year">For last year</option>
        <option value="Older">Older</option>
      </select>
    </label>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </>
);
