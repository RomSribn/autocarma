import React from 'react';
import PropTypes from 'prop-types';
import Table from './components/Table';

import './Accidents.scss';

const SimpleTable = ({ markers, gettingId, dumpingAccident }) => (
  <div className="accidents">
    <Table markers={markers} gettingId={gettingId} dumpingAccident={dumpingAccident} />
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
  dumpingAccident: PropTypes.func.isRequired,
};
