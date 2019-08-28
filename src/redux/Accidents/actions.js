import { createAction } from 'redux-actions';
import { auth } from 'firebase/app';
import history from 'utils/history';

import { showLastItems, showUserPost } from 'services/FirebaseDB';
import { getAccidentImages } from 'services/FirebaseStorage';
import {
  FETCH_USERS_SUCCESS,
  FETCH_ACCIDENTS_SUCCESS,
  LOGIN_CHECK,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  SUBMIT_SUCCESS,
  SET_CURRENT_MARKER_SUCCESS,
  GET_ID_SUCCESS,
  GET_IMG_SUCCESS,
  DUMP_ID_SUCCESS,
} from './action_types';

export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS);
export const fetchAccidentsSuccess = createAction(FETCH_ACCIDENTS_SUCCESS);
export const loginCheckSuccess = createAction(LOGIN_CHECK);
export const loginFailed = createAction(LOGIN_FAILED);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const signupFailed = createAction(SIGNUP_FAILED);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const submitSuccess = createAction(SUBMIT_SUCCESS);
export const setCurrentMarkerSuccess = createAction(SET_CURRENT_MARKER_SUCCESS);
export const getIdSuccess = createAction(GET_ID_SUCCESS);
export const getImgSuccess = createAction(GET_IMG_SUCCESS);
export const dumpIdSuccess = createAction(DUMP_ID_SUCCESS);

export const fetchAccidents = () => dispatch => showLastItems().then((response) => {
  response.on('value', (snap) => {
    const value = snap.val();

    const result = value ? Object.entries(value) : null;

    dispatch(fetchAccidentsSuccess(result));
  });
});

export const fetchUsers = user => dispatch => showUserPost(user).then((response) => {
  response.on('value', (snap) => {
    const value = snap.val();

    const result = value ? Object.values(value) : null;

    dispatch(fetchUsersSuccess(result));
  });
});

export const loginCheck = user => (dispatch) => {
  if (user) {
    return dispatch(loginCheckSuccess(user.displayName));
  }
  return null;
};

export const login = values => dispatch => auth()
  .signInWithEmailAndPassword(values.email, values.password)
  .then((res) => {
    dispatch(loginSuccess(res.user.uid));
    history.push('/accidents');
  })
  .catch(error => dispatch(loginFailed(error.message)));

export const logout = () => dispatch => dispatch(logoutSuccess());

export const signup = values => dispatch => auth()
  .createUserWithEmailAndPassword(values.email, values.password)
  .then((res) => {
    res.user.updateProfile({
      displayName: values.username,
    });
    dispatch(signupSuccess(res.user.uid));
    history.push('/accidents');
  })
  .catch(error => dispatch(signupFailed(error.message)));

export const setSubmitData = res => (dispatch) => {
  dispatch(submitSuccess(res));
};

export const setCurrentMarker = res => dispatch => dispatch(setCurrentMarkerSuccess(res));

export const gettingId = id => (dispatch) => {
  getAccidentImages(id).then(images => dispatch(getImgSuccess(images)));
  dispatch(getIdSuccess(id));
};

export const dumpingId = () => dispatch => dispatch(dumpIdSuccess());
