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
  const checkedMarkers = userCurrent.id === '8mOY0CflD6QXjebbE7ibObU1Shw1' ? markers : users;
  return (
    <div className="accidents">
      <Table
        markers={filteredMarkers.length ? filteredMarkers : checkedMarkers}
        gettingId={gettingId}
        dumpingAccident={dumpingAccident}
        filtering={filtering}
        user={userCurrent}
      />
    </div>
  );
};

export default Accidents;
