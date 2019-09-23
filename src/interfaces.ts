interface IfieldProps {
  name: string;
  value: string;
  onChange: () => void;
  onBlur: () => void;
}

interface IformProps {
  touched: object;
  errors: object;
}

export interface IFilterSelectsProps {
  field: IfieldProps;
  form: IformProps;
  setFieldValue: (key: string, value: any) => void;
  label: string;
  type: string;
}

export interface IMarkersProps {
  id?: number;
  type: string;
  license: string;
  time?: string;
  rating?: number;
}

export interface IUserProps {
  id: string;
  name: string;
}

export interface IcurrentMarkerProps {
  lat: number;
  lng: number;
}

export interface ISimpleTableProps {
  markers: IMarkersProps[];
  gettingId: (id: string) => void;
  dumpingAccident: () => void;
  filtering: (values: object) => void;
  user: IUserProps;
  isAdmin?: boolean;
}

export interface IAccidentProps extends IMarkersProps {
  model: string;
  author: string;
  description: string;
}
