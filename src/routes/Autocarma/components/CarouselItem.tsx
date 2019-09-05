import React from 'react';
import { ICarouselItemProps } from '../interface';
import './CarouselItem.scss';

const CarouselItem = ({
  model, license, author, time,
}: ICarouselItemProps) => (
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
