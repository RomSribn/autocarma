import React from 'react';
import PropTypes from 'prop-types';
import './CarouselItem.scss';

const CarouselItem = ({
  model, license, author, time,
}) => (
  <ul className="carousel-item">
    <li className="item">
      <span className="key">Car model:</span>
      <span className="value">{model}</span>
    </li>
    <li className="item">
      <span className="key">License plate:</span>
      <span className="value">{license}</span>
    </li>
    <li className="item">
      <span className="key">Author:</span>
      <span className="value">{author}</span>
    </li>
    <li className="item">
      <span className="key">Date</span>
      <span className="value">{time}</span>
    </li>
  </ul>
);

export default CarouselItem;

CarouselItem.propTypes = {
  model: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
