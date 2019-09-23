import { createAction } from 'redux-actions';
import { auth } from 'firebase/app';
import history from 'utils/history';

import {
  LOGIN_CHECK,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  TOGGLE_LOADER_SUCCES,
} from './action_types';

export const loginCheckSuccess = createAction(LOGIN_CHECK);
export const loginFailed = createAction(LOGIN_FAILED);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const signupFailed = createAction(SIGNUP_FAILED);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const toggleLoaderSuccess = createAction(TOGGLE_LOADER_SUCCES);

export const toggleLoader = (flag: boolean) => dispatch => dispatch(toggleLoaderSuccess(flag));

export const loginCheck = user => (dispatch) => {
  if (user) {
    const result = {
      id: user.uid,
      name: user.displayName,
    };
    if (!user.uid && !user.displayName) dispatch(loginCheckSuccess(null));
    return dispatch(loginCheckSuccess(result));
  }
  return null;
};

export const login = values => dispatch => auth()
  .signInWithEmailAndPassword(values.email, values.password)
  .then((res: { user }) => {
    dispatch(loginSuccess(res.user.uid));
    toggleLoader(true);
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

export type AccidentsActionTypes = ReturnType<
  | typeof loginCheckSuccess
  | typeof loginFailed
  | typeof loginSuccess
  | typeof logoutSuccess
  | typeof signupFailed
  | typeof signupSuccess
  | typeof toggleLoaderSuccess
>;
