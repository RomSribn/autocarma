import React from 'react';
import { IAccidentsProps } from './interface';
import Table from './components/Table';

import './Accidents.scss';

const Accidents = ({
  markers,
  users,
  gettingId,
  dumpingAccident,
  filtering,
  filteredMarkers,
  userCurrent,
}: IAccidentsProps) => {
  let isAdmin = false;
  let checkedMarkers = users;
  if (userCurrent.id === '8mOY0CflD6QXjebbE7ibObU1Shw1') {
    isAdmin = true;
    checkedMarkers = markers;
  }
  return (
    <div className="accidents">
      <Table
        markers={filteredMarkers.length ? filteredMarkers : checkedMarkers}
        gettingId={gettingId}
        dumpingAccident={dumpingAccident}
        filtering={filtering}
        user={userCurrent}
        isAdmin={isAdmin}
      />
    </div>
  );
};

export default Accidents;
