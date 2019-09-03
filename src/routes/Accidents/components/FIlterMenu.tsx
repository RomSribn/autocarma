import React from 'react';
import { Formik, Field } from 'formik';
import Drawer from 'react-drag-drawer';
import { FilterMenuProps } from 'types/index';
import { FilterSelectType, FilterSelectTime } from './FilterSelects';
import './FilterMenu.scss';

const FilterMenu = ({ filtering }: FilterMenuProps) => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const onSubmit = (values: object) => {
    toggle();
    filtering(values);
  };
  return (
    <div className="form-filter-wrapper">
      <button type="button" className="filter-button" onClick={toggle}>
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
            <form onSubmit={handleSubmit} className="filter-form">
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
