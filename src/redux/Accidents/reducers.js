import { handleActions } from 'redux-actions';
import {
  fetchAccidentsSuccess,
  loginCheckSuccess,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  signupSuccess,
  signupFailed,
  submitSuccess,
  setCurrentMarkerSuccess,
} from './actions';

const initialState = {
  markers: [
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
  currenMarker: {},
  error: '',
  user: '',
};

const accidents = handleActions(
  {
    [fetchAccidentsSuccess]: (state, action) => ({
      ...state,
      markers: action.payload,
    }),
    [loginCheckSuccess]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [loginSuccess]: (state, action) => ({
      ...state,
      user: action.payload,
      error: '',
    }),
    [loginFailed]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [logoutSuccess]: state => ({
      ...state,
      user: '',
    }),
    [signupSuccess]: (state, action) => ({
      ...state,
      user: action.payload,
      error: '',
    }),
    [signupFailed]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [submitSuccess]: (state, action) => ({
      ...state,
      markers: [...state.markers, action.payload],
    }),
    [setCurrentMarkerSuccess]: (state, action) => ({
      ...state,
      currentMarker: action.payload,
    }),
  },
  initialState,
);

export default accidents;
