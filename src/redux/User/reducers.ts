import { handleActions } from 'redux-actions';
import {
  FETCH_USERS_SUCCESS,
  LOGIN_CHECK,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from './action_types';

import { AccidentsActionTypes } from './actions';

interface IState {
  error: string;
  user: {
    id: string;
    name: string;
  };
  currentId: string;
  users: any;
}

const initialState = {
  error: '',
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
};

const accidents = handleActions(
  {
    [FETCH_USERS_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      users: action.payload || state.users,
    }),
    [LOGIN_CHECK]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      user: action.payload,
    }),
    [LOGIN_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      user: action.payload,
      error: '',
    }),
    [LOGIN_FAILED]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      error: action.payload,
    }),
    [LOGOUT_SUCCESS]: (state: any) => ({
      ...state,
      user: '',
    }),
    [SIGNUP_SUCCESS]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      user: action.payload,
      error: '',
    }),
    [SIGNUP_FAILED]: (state: IState, action: AccidentsActionTypes) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState,
);

export default accidents;
