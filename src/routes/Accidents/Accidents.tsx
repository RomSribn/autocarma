import React from 'react';
import { AccidentsProps } from 'types/index';
import Table from './components/Table';

import './Accidents.scss';

const Accidents = ({
  markers,
  users,
  gettingId,
  dumpingAccident,
  filtering,
  filteredMarkers,
  user,
}: AccidentsProps) => {
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

export default Accidents;
