import React from 'react';
import { Formik, Field } from 'formik';
import Drawer from 'react-drag-drawer';
import { FilterSelectType, FilterSelectTime } from './FilterSelects';
import './FilterMenu.scss';

const FilterMenu = ({ filtering }) => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const onSubmit = (values) => {
    toggle();
    filtering(values);
  };
  return (
    <div className="form-new-accident-wrapper">
      <button type="button" className="license-button" onClick={toggle}>
        Filtering
      </button>
      <Formik
        initialValues={{
          type: '',
          time: '',
        }}
        onSubmit={onSubmit}
      >
        {({
          values, handleChange, handleBlur, handleSubmit,
        }) => (
          <Drawer open={open} onRequestClose={toggle} modalElementClass="modal">
            <form onSubmit={handleSubmit} className="new-accident-form">
              <ul className="filter-menu">
                <li className="select-wrap">
                  <Field
                    component={FilterSelectType}
                    name="type"
                    label="Accident type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.type}
                  />
                </li>
                <li className="select-wrap">
                  <Field
                    component={FilterSelectTime}
                    name="time"
                    label="Time"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.time}
                  />
                </li>
              </ul>
              <input className="filter-submit" type="submit" value="Filter" />
            </form>
          </Drawer>
        )}
      </Formik>
    </div>
  );
};

export default FilterMenu;
