import React from 'react';
import PropTypes from 'prop-types';
import Table from './components/Table';

import './Accidents.scss';

const SimpleTable = ({
  markers,
  users,
  gettingId,
  dumpingAccident,
  filtering,
  filteredMarkers,
  user,
}) => {
  const checkedMarkers = user.id === '8mOY0CflD6QXjebbE7ibObU1Shw1' ? markers : users;
  return (
    <div className="accidents">
      <Table
        markers={filteredMarkers.length ? filteredMarkers : checkedMarkers}
        gettingId={gettingId}
        dumpingAccident={dumpingAccident}
        filtering={filtering}
        user={user}
      />
    </div>
  );
};

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
  filtering: PropTypes.func.isRequired,
};
