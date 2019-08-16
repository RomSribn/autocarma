import { createAction } from 'redux-actions';
import { auth } from 'firebase/app';
import history from 'utils/history';

import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  POST_SUCCESS,
  POST_FAILED,
  DELETE_SUCCESS,
  DELETE_FAILED,
  PUT_SUCCESS,
  PUT_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from './action_types';

import {
  get, post, put, del,
} from '../../services/Fetch';

export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailed = createAction(FETCH_FAILED);
export const postSuccess = createAction(POST_SUCCESS);
export const postFailed = createAction(POST_FAILED);
export const putSuccess = createAction(PUT_SUCCESS);
export const putFailed = createAction(PUT_FAILED);
export const deleteSuccess = createAction(DELETE_SUCCESS);
export const deleteFailed = createAction(DELETE_FAILED);

export const loginFailed = createAction(LOGIN_FAILED);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const signupFailed = createAction(SIGNUP_FAILED);
export const signupSuccess = createAction(SIGNUP_SUCCESS);

export const fetchIdeaCard = () => dispatch => get('accidents')
  .then(data => dispatch(fetchSuccess(data)))
  .catch(error => dispatch(fetchFailed(error)));

export const postIdeaCard = accident => dispatch => post('accidents', accident)
  .then(data => dispatch(postSuccess(data)))
  .catch(error => dispatch(postFailed(error.toString())));

export const putIdeaCard = (id, data) => dispatch => put('accidents', id, data)
  .then(response => dispatch(putSuccess(response)))
  .catch(error => dispatch(putFailed(error.toString())));

export const deleteIdeaCard = id => dispatch => del('accidents', id)
  .then(() => dispatch(deleteSuccess(id)))
  .catch(error => dispatch(deleteFailed(error.toString())));

export const login = values => dispatch => auth()
  .signInWithEmailAndPassword(values.email, values.password)
  .then((res) => {
    dispatch(loginSuccess(res.message));
    history.push('/accidents');
  })
  .catch(error => dispatch(loginFailed(error.message)));

export const signup = values => dispatch => auth()
  .createUserWithEmailAndPassword(values.email, values.password)
  .then((res) => {
    res.user.updateProfile({
      displayName: values.username,
    });
    console.log(res);
    dispatch(signupSuccess(res.message));
    history.push('/accidents');
  })
  .catch(error => dispatch(signupFailed(error.message)));
