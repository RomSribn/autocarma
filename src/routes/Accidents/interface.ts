import { IMarkersProps, IUserProps } from 'interfaces';

export interface IFilterMenuProps {
  filtering: (values: object) => void;
}

export interface IAccidentRowProps extends IMarkersProps {
  currentId: string;
  gettingId: (id: string) => void;
  dumpingAccident: (currentId: string) => void;
}

export interface IAccidentsProps {
  markers: IMarkersProps[];
  users: IMarkersProps[];
  filteredMarkers: IMarkersProps[];
  user: IUserProps;
  gettingId: (id: string) => void;
  dumpingAccident: () => void;
  filtering: (values: object) => void;
}
