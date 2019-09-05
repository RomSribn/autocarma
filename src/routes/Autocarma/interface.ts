import { IMarkersProps, IcurrentMarkerProps } from 'interfaces';

export interface ICarouselItemProps {
  model: string;
  license: string;
  author: string;
  time: string;
}

export interface IMobileCarouselProps {
  markers: IMarkersProps[];
}

export interface IAutocarmaMapProps {
  setCurrentMarker?: (params: object) => void;
  markers: IMarkersProps[];
  isMarkerShown: boolean;
}
