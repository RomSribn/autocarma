import React from 'react';
import Drawer from 'react-drag-drawer';
import './FilterMenu.scss';

const SimpleSelect = () => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <form>
      <button type="button" className="license-button" onClick={toggle}>
        Filtering
      </button>

      <Drawer open={open} onRequestClose={toggle} modalElementClass="modal">
        <ul className="filter-menu">
          <li className="select-wrap">
            <label htmlFor="selectAccident">
              Accident type:
              <select
                id="selectAccident"
                className="form-item__element form-item__element--select"
                required
              >
                <option disabled selected value="">
                  Please select value
                </option>
                <option value="1">Parking law:</option>
                <option value="2">Smth else:</option>
              </select>
            </label>
          </li>
          <li className="select-wrap">
            <label htmlFor="selectAccident">
              Time:
              <select
                id="selectAccident"
                className="form-item__element form-item__element--select"
                required
              >
                <option disabled selected value="">
                  Please select value
                </option>
                <option value="1">Recently added</option>
                <option value="2">For last month</option>
                <option value="3">For last year</option>
                <option value="4">Older</option>
              </select>
            </label>
          </li>
        </ul>
        <input className="filter-submit" type="submit" value="Filter" onClick={toggle} />
      </Drawer>
    </form>
  );
};

export default SimpleSelect;
