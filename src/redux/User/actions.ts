import { createAction } from 'redux-actions';
import { auth } from 'firebase/app';
import history from 'utils/history';

<<<<<<< HEAD:src/redux/User/actions.ts
import { showUserPost } from 'services/FirebaseDB';
import {
  FETCH_USERS_SUCCESS,
=======
import { showLastItems, showUserPost, deletePost } from 'services/FirebaseDB';
import { getAccidentImages } from 'services/FirebaseStorage';
import {
  FETCH_USERS_SUCCESS,
  FETCH_ACCIDENTS_SUCCESS,
>>>>>>> develop:src/redux/Accidents/actions.js
  LOGIN_CHECK,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
<<<<<<< HEAD:src/redux/User/actions.ts
} from './action_types';

export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS);
=======
  SUBMIT_SUCCESS,
  SET_CURRENT_MARKER_SUCCESS,
  GET_ID_SUCCESS,
  GET_IMG_SUCCESS,
  DUMP_ACCIDENT_SUCCESS,
  FILTER_SUCCESS,
} from './action_types';

export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS);
export const fetchAccidentsSuccess = createAction(FETCH_ACCIDENTS_SUCCESS);
>>>>>>> develop:src/redux/Accidents/actions.js
export const loginCheckSuccess = createAction(LOGIN_CHECK);
export const loginFailed = createAction(LOGIN_FAILED);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const signupFailed = createAction(SIGNUP_FAILED);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
<<<<<<< HEAD:src/redux/User/actions.ts
=======
export const submitSuccess = createAction(SUBMIT_SUCCESS);
export const setCurrentMarkerSuccess = createAction(SET_CURRENT_MARKER_SUCCESS);
export const getIdSuccess = createAction(GET_ID_SUCCESS);
export const getImgSuccess = createAction(GET_IMG_SUCCESS);
export const dumpingAccidentSuccess = createAction(DUMP_ACCIDENT_SUCCESS);
export const filterSuccess = createAction(FILTER_SUCCESS);
>>>>>>> develop:src/redux/Accidents/actions.js

export const fetchUsers = user => dispatch => showUserPost(user).then((response) => {
  response.on('value', (snap) => {
    const value = snap.val();
<<<<<<< HEAD:src/redux/User/actions.ts
=======
    const result = value ? Object.entries(value) : null;

    dispatch(fetchAccidentsSuccess(result));
  });
});

export const fetchUsers = user => dispatch => showUserPost(user).then((response) => {
  response.on('value', (snap) => {
    const value = snap.val();
>>>>>>> develop:src/redux/Accidents/actions.js

    const result = value ? Object.entries(value) : null;

    dispatch(fetchUsersSuccess(result));
  });
});

export const loginCheck = user => (dispatch) => {
  if (user) {
    const result = {
      id: user.uid,
      name: user.displayName,
    };
    return dispatch(loginCheckSuccess(result));
  }
  return null;
};

export const login = values => dispatch => auth()
  .signInWithEmailAndPassword(values.email, values.password)
  .then((res: { user }) => {
    dispatch(loginSuccess(res.user.uid));
    history.push('/accidents');
  })
  .catch(error => dispatch(loginFailed(error.message)));

export const logout = () => dispatch => dispatch(logoutSuccess());

export const signup = values => dispatch => auth()
  .createUserWithEmailAndPassword(values.email, values.password)
  .then((res: { user }) => {
    res.user.updateProfile({
      displayName: values.username,
    });
    dispatch(signupSuccess(res.user.uid));
    history.push('/accidents');
  })
  .catch(error => dispatch(signupFailed(error.message)));

<<<<<<< HEAD:src/redux/User/actions.ts
export type AccidentsActionTypes = ReturnType<
  | typeof fetchUsersSuccess
  | typeof loginCheckSuccess
  | typeof loginFailed
  | typeof loginSuccess
  | typeof logoutSuccess
  | typeof signupFailed
  | typeof signupSuccess
>;
=======
export const setSubmitData = res => (dispatch) => {
  dispatch(submitSuccess(res));
};

export const setCurrentMarker = res => dispatch => dispatch(setCurrentMarkerSuccess(res));

export const gettingId = id => (dispatch) => {
  getAccidentImages(id).then(images => dispatch(getImgSuccess(images)));
  dispatch(getIdSuccess(id));
};

export const dumpingAccident = id => (dispatch) => {
  deletePost(id);
  dispatch(dumpingAccidentSuccess(id));
};

export const filtering = values => dispatch => dispatch(filterSuccess(values));
>>>>>>> develop:src/redux/Accidents/actions.js
