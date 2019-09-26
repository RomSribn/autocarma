import { handleActions } from 'redux-actions';
import {
  LOGIN_CHECK,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  TOGGLE_LOADER_SUCCES,
  UPDATE_PROFILE_FAILED,
} from './action_types';

import { AccidentsActionTypes } from './actions';

interface IState {
  error: string;
  userCurrent: any;
  currentId: string;
  users: any;
  isLoading: boolean;
}

const initialState = {
  error: '',
  userCurrent: '',
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
  isLoading: true,
};

const accidents = handleActions(
  {
    [LOGIN_CHECK]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      userCurrent: action.payload,
    }),
    [LOGIN_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      userCurrent: action.payload,
      error: '',
    }),
    [LOGIN_FAILED]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      error: action.payload,
    }),
    [LOGOUT_SUCCESS]: (state: any) => ({
      ...state,
      userCurrent: '',
    }),
    [SIGNUP_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      userCurrent: action.payload,
      error: '',
    }),
    [SIGNUP_FAILED]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      error: action.payload,
    }),
    [TOGGLE_LOADER_SUCCES]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      isLoading: action.payload,
    }),
    [UPDATE_PROFILE_FAILED]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState,
);

export default accidents;
