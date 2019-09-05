import React from 'react';
import PropTypes from 'prop-types';
import Table from './components/Table';

import './Accidents.scss';

interface MarkersProps {
  id: number;
  type: string;
  license: string;
  time: string;
  rating: number;
}

interface UserProps {
  id: string;
  name: string;
}

interface AccidentsProps {
  markers: Array<MarkersProps>;
  users: Array<MarkersProps>;
  filteredMarkers: Array<MarkersProps>;
  user: UserProps;
  gettingId: (id: string) => void;
  dumpingAccident: () => void;
  filtering: (values: object) => void;
}

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
