import { handleActions } from 'redux-actions';
import {
  fetchSuccess,
  loginSuccess,
  loginFailed,
  signupSuccess,
  signupFailed,
  markeredSuccess,
} from './actions';

const initialState = {
  data: [
    {
      id: 1,
      type: 'Parking law',
      license: 'AX87678YU',
      time: '11/11/2019',
      rating: 12,
      actions: '',
    },
    {
      id: 2,
      type: 'Parking law',
      license: 'AX87678YU',
      time: '11/11/2019',
      rating: 12,
      actions: '',
    },
    {
      id: 3,
      type: 'Parking law',
      license: 'AX87678YU',
      time: '11/11/2019',
      rating: 12,
      actions: '',
    },
  ],
  coordinates: [
    {
      id: '4n5pxq24kpiob12og9',
      lat: 50.00008585430338,
      lng: 36.24283354637146,
    },
  ],
  error: '',
};

const accidents = handleActions(
  {
    [fetchSuccess]: (state, action) => ({
      ...state,
      accidents: action.payload,
    }),
    [loginSuccess]: state => ({
      ...state,
      error: '',
    }),
    [loginFailed]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [signupSuccess]: state => ({
      ...state,
      error: '',
    }),
    [signupFailed]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [markeredSuccess]: (state, action) => ({
      ...state,
      coordinates: [...state.coordinates, action.payload],
    }),
  },
  initialState,
);

export default accidents;
