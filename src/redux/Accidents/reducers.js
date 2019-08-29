import { handleActions } from 'redux-actions';
import {
  fetchUsersSuccess,
  fetchAccidentsSuccess,
  loginCheckSuccess,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  signupSuccess,
  signupFailed,
  submitSuccess,
  setCurrentMarkerSuccess,
  getIdSuccess,
  getImgSuccess,
  dumpingAccidentSuccess,
} from './actions';

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
  currenMarker: {},
  error: '',
  user: '',
  currentId: '',
  users: [],
  images: [],
};

const accidents = handleActions(
  {
    [fetchUsersSuccess]: (state, action) => ({
      ...state,
      users: action.payload || state.users,
    }),
    [fetchAccidentsSuccess]: (state, action) => ({
      ...state,
      markers: action.payload || state.markers,
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
    [submitSuccess]: state => ({
      ...state,
      markers: [...state.markers],
    }),
    [setCurrentMarkerSuccess]: (state, action) => ({
      ...state,
      currentMarker: action.payload,
    }),
    [getIdSuccess]: (state, action) => ({
      ...state,
      currentId: action.payload,
    }),
    [getImgSuccess]: (state, action) => ({
      ...state,
      images: action.payload,
    }),
    [dumpingAccidentSuccess]: (state, action) => ({
      ...state,
      markers: state.markers.filter(marker => marker[0] !== action.payload),
    }),
  },
  initialState,
);

export default accidents;
