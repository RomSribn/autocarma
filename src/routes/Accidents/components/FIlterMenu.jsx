import React from 'react';
import './FilterMenu.scss';

export default function SimpleSelect() {
  return (
    <form>
      <ul className="filter-menu">
        <li>Filter by:</li>
        <li className="select-wrap">
          <select id="select" className="form-item__element form-item__element--select" required>
            <option disabled selected value="">Please select value</option>
            <option value="1">Accident type</option>
            <option value="2">Time</option>
          </select>
        </li>
        <li><div className="license-button">License plate</div></li>
        <li>
          <input className="filter-submit" type="submit" value="Filter" />
        </li>
      </ul>
    </form>

  );
}
