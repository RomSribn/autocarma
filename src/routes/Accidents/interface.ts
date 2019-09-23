import { IMarkersProps, IUserProps } from 'interfaces';

export interface IFilterMenuProps {
  filtering: (values: object) => void;
}

export interface IAccidentRowProps extends IMarkersProps {
  currentId: string;
  gettingId: (id: string) => void;
  dumpingAccident: (currentId: string) => void;
  isAdmin: boolean;
}

export interface IAccidentsProps {
  markers: IMarkersProps[];
  users: IMarkersProps[];
  filteredMarkers: IMarkersProps[];
  userCurrent: IUserProps;
  gettingId: (id: string) => void;
  dumpingAccident: () => void;
  filtering: (values: object) => void;
}
