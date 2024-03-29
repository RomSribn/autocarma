import { IMarkersProps, IcurrentMarkerProps } from 'interfaces';

export interface IFormNewAccidentProps {
  setCurrentMarker: () => void;
  setSubmitData: (array: object[]) => void;
  currentMarker: IcurrentMarkerProps;
  markers: IMarkersProps[];
  userCurrent: {
    id: string;
    name: string;
  };
}

export interface IMapComponentProps {
  setCurrentMarker: (params: object) => void;
  setFieldValue: (key: string, value: any) => void;
  currentMarker: IcurrentMarkerProps;
  markers: IMarkersProps[];
  user: string;
  isMarkerShown: boolean;
}

export interface ThumbProps {
  file: {
    name: string;
    size: number;
    type: any;
    slice: any;
  };
  index: string;
  handleRemove: (index: string) => void;
}
