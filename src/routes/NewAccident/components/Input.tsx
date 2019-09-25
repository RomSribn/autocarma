import React from 'react';
import { IFilterSelectsProps } from 'interfaces';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import Dropzone from 'react-dropzone';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Thumb from './Thumb';
import './Input.scss';

interface ICustomFileInputProps extends IFilterSelectsProps {
  setFieldValue: (field: string, params: any) => void;
  values: {
    images: object[];
    id: string;
  };
}

const drugndropMsg = {
  active: "Drop it like it's hot!",
  not: 'Add photo',
};

export const CustomField = ({
  field,
  label,
  type,
  setFieldValue,
  form: { touched, errors },
  ...props
}: IFilterSelectsProps) => {
  const classNameCntrl = field.value ? 'visible' : null;
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
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </>
  );
};

export const CustomFieldTextArea = ({
  field,
  label,
  type,
  form: { touched, errors },
  ...props
}: IFilterSelectsProps) => (
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
}: ICustomFileInputProps) => (
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
}: ICustomFileInputProps) => {
  const [images, setImages] = React.useState();
  const handleRemove = (index) => {
    const newImages = images;
    newImages.splice(index, 1);
    setImages(newImages);
    debugger;
  };
  const onDrop = (acceptedFiles) => {
    setImages(acceptedFiles);
    // setFieldValue('images', values.images.concat(acceptedFiles));
  };
  return (
    <>
      <Dropzone multiple onDrop={onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <>
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? drugndropMsg.active : drugndropMsg.not}
            </div>
            <br />
            <div className="dropzone-images">
              {images
                ? images.map((file, index) => (
                  <Thumb key={file.name} index={index} handleRemove={handleRemove} file={file} />
                ))
                : null}
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
