import React from 'react';
import PropTypes from 'prop-types';
import Table from './components/Table';
import ViewPage from './components/ViewPage';

import './Accidents.scss';

const SimpleTable = ({
  markers, gettingId, currentId, images,
}) => (
  <div className="accidents">
    {!currentId ? (
      <Table markers={markers} gettingId={gettingId} />
    ) : (
      <ViewPage markers={markers.filter(el => el[0] === currentId)} images={images} />
    )}
  </div>
);

export default SimpleTable;

SimpleTable.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      license: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
  gettingId: PropTypes.func.isRequired,
  currentId: PropTypes.string.isRequired,
  images: PropTypes.shape([]).isRequired,
};
