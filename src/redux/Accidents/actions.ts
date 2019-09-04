import { createAction } from 'redux-actions';

import { showLastItems, deletePost } from 'services/FirebaseDB';
import { getAccidentImages } from 'services/FirebaseStorage';
import {
  FETCH_ACCIDENTS_SUCCESS,
  SUBMIT_SUCCESS,
  SET_CURRENT_MARKER_SUCCESS,
  GET_IMG_SUCCESS,
  DUMP_ACCIDENT_SUCCESS,
  FILTER_SUCCESS,
  GET_ID_SUCCESS,
} from './action_types';

export const fetchAccidentsSuccess = createAction(FETCH_ACCIDENTS_SUCCESS);
export const submitSuccess = createAction(SUBMIT_SUCCESS);
export const setCurrentMarkerSuccess = createAction(SET_CURRENT_MARKER_SUCCESS);
export const getImgSuccess = createAction(GET_IMG_SUCCESS);
export const dumpingAccidentSuccess = createAction(DUMP_ACCIDENT_SUCCESS);
export const filterSuccess = createAction(FILTER_SUCCESS);
export const getIdSuccess = createAction(GET_ID_SUCCESS);

export const fetchAccidents = () => dispatch => showLastItems().then((response) => {
  response.on('value', (snap) => {
    const value = snap.val();
    const result = value ? Object.entries(value) : null;

    dispatch(fetchAccidentsSuccess(result));
  });
});

export const setSubmitData = res => (dispatch) => {
  dispatch(submitSuccess(res));
};

export const gettingId = id => (dispatch) => {
  getAccidentImages(id).then(images => dispatch(getImgSuccess(images)));
  dispatch(getIdSuccess(id));
};

export const dumpingAccident = id => (dispatch) => {
  deletePost(id);
  dispatch(dumpingAccidentSuccess(id));
};

export const setCurrentMarker = res => dispatch => dispatch(setCurrentMarkerSuccess(res));

export const filtering = values => dispatch => dispatch(filterSuccess(values));

export type AccidentsActionTypes = ReturnType<
  | typeof fetchAccidentsSuccess
  | typeof submitSuccess
  | typeof setCurrentMarkerSuccess
  | typeof getImgSuccess
  | typeof dumpingAccidentSuccess
  | typeof filterSuccess
>;
