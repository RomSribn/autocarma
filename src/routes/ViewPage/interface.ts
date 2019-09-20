import { IMarkersProps, IcurrentMarkerProps } from 'interfaces';

export interface ISliderProps {
  images: Array<string>;
}

export interface ViewPageProps {
  markers: IMarkersProps[];
  images: string[];
  currentId: IcurrentMarkerProps;
}
