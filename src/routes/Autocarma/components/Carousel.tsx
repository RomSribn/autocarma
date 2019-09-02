import React from 'react';
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';
import CarouselItem from './CarouselItem';
import './Carousel.scss';

interface MarkersProps {
  id: number;
  type: string;
  license: string;
  time: string;
  rating: number;
}

interface SimpleTableProps {
  markers: Array<MarkersProps>;
}

const Carousel = ({ markers }: SimpleTableProps) => {
  const [activeItemIndex, setState] = React.useState(0);

  return (
    <div style={{ padding: '0 60px', maxWidth: '80%', margin: '0 auto' }}>
      <ItemsCarousel
        placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
        enablePlaceholder
        numberOfPlaceholderItems={3}
        numberOfCars={3}
        gutter={12}
        slidesToScroll={2}
        chevronWidth={60}
        outsideChevron
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => {
          setState(value);
        }}
        rightChevron={'>'}
        leftChevron={'<'}
      >
        {markers ? markers.map(el => <CarouselItem key={el[0]} {...el[1]} />) : null}
      </ItemsCarousel>
    </div>
  );
};

export default Carousel;