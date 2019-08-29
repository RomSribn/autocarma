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
      <Drawer open={open} onRequestClose={toggle} modalElementClass="modal">
        <div>Hey Im inside the drawer!</div>
      </Drawer>
      <ul className="filter-menu">
        <li>Filter by:</li>
        <li className="select-wrap">
          <select id="select" className="form-item__element form-item__element--select" required>
            <option disabled selected value="">
              Please select value
            </option>
            <option value="1">Accident type</option>
            <option value="2">Time</option>
          </select>
        </li>
        <li>
          <div className="license-button">License plate</div>
        </li>
        <li>
          <input className="filter-submit" type="submit" value="Filter" onClick={toggle} />
        </li>
      </ul>
    </form>
  );
};

export default SimpleSelect;
