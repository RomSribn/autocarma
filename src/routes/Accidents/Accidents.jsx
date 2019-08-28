import React from 'react';
import PropTypes from 'prop-types';
import Table from './components/Table';
import ViewPage from '../ViewPage/ViewPage';

import './Accidents.scss';

const SimpleTable = ({
  markers, gettingId, currentId, images, dumpingId,
}) => (
  <div className="accidents">
    <Table markers={markers} gettingId={gettingId} />
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
  dumpingId: PropTypes.func.isRequired,
  currentId: PropTypes.string.isRequired,
  images: PropTypes.shape([]).isRequired,
};
