import { handleActions } from 'redux-actions';
import {
  FETCH_ACCIDENTS_SUCCESS,
  SUBMIT_SUCCESS,
  SET_CURRENT_MARKER_SUCCESS,
  GET_IMG_SUCCESS,
  DUMP_ACCIDENT_SUCCESS,
  FILTER_SUCCESS,
  GET_ID_SUCCESS,
} from './action_types';

import { AccidentsActionTypes } from './actions';

const admin = '8mOY0CflD6QXjebbE7ibObU1Shw1';

interface IState {
  markers: any;
  filteredMarkers: any;
  currenMarker: object;
  user: {
    id: string;
    name: string;
  };
  currentId: string;
  users: any;
  images: any;
}

const initialState = {
  markers: [
    [
      '-LmxgZcP6t2jvCTAZI1N',
      {
        id: '4n5pxq24kpiob12og9',
        coordinates: {
          lat: 50.00008585430338,
          lng: 36.24283354637146,
        },
        type: 'Parking law',
        license: 'AXB8979JV',
        model: 'Tesla model X',
        description: 'lorem ipsum doloooororosjl',
      },
    ],
  ],
  filteredMarkers: [],
  currenMarker: {},
  user: {
    id: '',
    name: '',
  },
  currentId: '',
  users: [
    [
      '-LmxgZcP6t2jvCTAZI1N',
      {
        id: '4n5pxq24kpiob12og9',
        coordinates: {
          lat: 50.00008585430338,
          lng: 36.24283354637146,
        },
        type: 'Parking law',
        license: 'AXB8979JV',
        model: 'Tesla model X',
        description: 'lorem ipsum doloooororosjl',
      },
    ],
    [
      '-LmxgZcP6t2jvCTAZI1N',
      {
        id: '4n5pxq24kpiob12og9',
        coordinates: {
          lat: 50.00008585430338,
          lng: 36.24283354637146,
        },
        type: 'Parking law',
        license: 'AXB8979JV',
        model: 'Tesla model X',
        description: 'lorem ipsum doloooororosjl',
      },
    ],
  ],
  images: [],
};

const accidents = handleActions(
  {
    [FETCH_ACCIDENTS_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      markers: action.payload || state.markers,
    }),

    [SUBMIT_SUCCESS]: (state: IState) => ({
      ...state,
      markers: [...state.markers],
    }),

    [SET_CURRENT_MARKER_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      currentMarker: action.payload,
    }),

    [GET_IMG_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      images: action.payload,
    }),

    [DUMP_ACCIDENT_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      markers: state.markers.filter(marker => marker[0] !== action.payload),
    }),

    [GET_ID_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      currentId: action.payload,
    }),

    [FILTER_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      filteredMarkers: (() => {
        const checkedMarkers = state.user.id === admin ? state.markers : state.users;
        return checkedMarkers.filter((marker) => {
          if (action.payload.type) {
            return marker[1].type === action.payload.type;
          }
          return true;
        });
      })(),
    }),
  },
  initialState,
);

export default accidents;