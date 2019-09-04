import React from 'react';
import { FilterSelectsProps } from 'types/index';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import Dropzone from 'react-dropzone';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Thumb from './Thumb';
import './Input.scss';

interface CustomFileInputProps extends FilterSelectsProps {
  setFieldValue: (field: string, params: any) => void;
  values: {
    images: Array<object>;
    id: string;
  };
}

const drugndropMsg = {
  active: "Drop it like it's hot!",
  not: 'Click me or drag a file to upload!',
};

export const CustomField = ({
  field,
  label,
  type,
  form: { touched, errors },
  ...props
}: FilterSelectsProps) => (
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
        <Check className="filled visible" />
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
}: FilterSelectsProps) => (
  <>
    <label htmlFor={label}>
      {label}
      <TextareaAutosize
        id={label}
        className="inputs-textarea"
        rows={12}
        rowsMax={12}
        {...field}
        {...props}
      />
    </label>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </>
);

export const SimpleSelect = ({
  field,
  label,
  type,
  form: { touched, errors },
  ...props
}: CustomFileInputProps) => (
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
  field,
  setFieldValue,
  values,
  form: { touched, errors },
}: CustomFileInputProps) => {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length) {
      setFieldValue('images', values.images.concat(acceptedFiles));
    }
  };

  return (
    <>
      <Dropzone accept="image/*" onDrop={acceptedFiles => onDrop(acceptedFiles)}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <>
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? drugndropMsg.active : drugndropMsg.not}
            </div>
            <br />
            <div className="dropzone-images">
              {values.images.length
                && values.images.map(file => <Thumb key={values.id} file={file} />)}
            </div>
          </>
        )}
      </Dropzone>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </>
  );
};
