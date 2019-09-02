import React from 'react';
import PropTypes from 'prop-types';
import './ViewPageTable.scss';

const ViewPageTable = ({
  type, model, license, author, time, description,
}) => (
  <ul className="viewpage-table">
    <li className="item">
      <span className="key">Type:</span>
      <span className="value">{type}</span>
    </li>
    <li className="item">
      <span className="key">License plate:</span>
      <span className="value">{license}</span>
    </li>
    <li className="item">
      <span className="key">Car model:</span>
      <span className="value">{model}</span>
    </li>
    <li className="item">
      <span className="key">Date</span>
      <span className="value">{time}</span>
    </li>
    <li className="item">
      <span className="key">Author:</span>
      <span className="value">{author}</span>
    </li>
    <li className="item">
      <span className="key">Happened at:</span>
      <span className="value">required</span>
    </li>
    <li className="item">
      <span className="key">Likes/dislikes:</span>
      <span className="value">175 175</span>
    </li>
    <li className="item">
      <span className="key">Description:</span>
      <span className="value">{description}</span>
    </li>
  </ul>
);

export default ViewPageTable;

ViewPageTable.propTypes = {
  model: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
