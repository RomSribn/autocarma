export interface CenteredTabsProps extends LayoutProps {
  fetchAccidents: () => void;
  signOut: () => Promise<void>;
  logout: () => void;
  loginCheck: (user: object) => void;
  fetchUsers: (uid: string) => void;
  user: {
    uid: string;
  };
}

export interface MainProps {
  children: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
  fetchAccidents: () => void;
  logout: () => void;
  loginCheck: (user: object) => void;
  fetchUsers: (uid: string) => void;
  user: {
    uid: string;
  };
}

export interface FilterMenuProps {
  filtering: (values: object) => void;
}

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

export interface FilterSelectsProps {
  field: IfieldProps;
  form: IformProps;
  label: string;
  type: string;
}

export interface MarkersProps {
  id?: number;
  type: string;
  license: string;
  time?: string;
  rating?: number;
}

export interface UserProps {
  id: string;
  name: string;
}

export interface SimpleTableProps {
  markers: MarkersProps[];
  gettingId: (id: string) => void;
  dumpingAccident: () => void;
  filtering: (values: object) => void;
  user: UserProps;
}

export interface AccidentRowProps extends MarkersProps {
  currentId: string;
  gettingId: (id: string) => void;
  dumpingAccident: (currentId: string) => void;
}

export interface AccidentsProps {
  markers: MarkersProps[];
  users: MarkersProps[];
  filteredMarkers: MarkersProps[];
  user: UserProps;
  gettingId: (id: string) => void;
  dumpingAccident: () => void;
  filtering: (values: object) => void;
}

export interface CarouselItemProps {
  model: string;
  license: string;
  author: string;
  time: string;
}

export interface LoginProps {
  login: (values: object) => void;
  error: string;
}

export interface IcurrentMarkerProps {
  lat: number;
  lng: number;
}

export interface FormNewAccidentProps {
  setCurrentMarker: () => void;
  setSubmitData: (array: object[]) => void;
  currentMarker: IcurrentMarkerProps;
  markers: MarkersProps[];
  user: {
    id: string;
    name: string;
  };
}

export interface MapComponentProps {
  setCurrentMarker: (params: object) => void;
  setFieldValue: (key: string, value: any) => void;
  currentMarker: IcurrentMarkerProps;
  markers: MarkersProps[];
  user: string;
  isMarkerShown: boolean;
}

export interface SignUp {
  signup: (values: object) => void;
  error: string;
}

export interface AccidentProps extends MarkersProps {
  model: string;
  author: string;
  description: string;
}

export interface ViewPageProps {
  markers: MarkersProps[];
  images: string[];
  currentId: IcurrentMarkerProps;
}
