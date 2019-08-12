import { createAction } from 'redux-actions';
import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  POST_SUCCESS,
  POST_FAILED,
  DELETE_SUCCESS,
  DELETE_FAILED,
  PUT_SUCCESS,
  PUT_FAILED,
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
