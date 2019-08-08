import { handleActions } from "redux-actions";
import {
  fetchSuccess,
  fetchFailed,
  postSuccess,
  postFailed,
  deleteSuccess,
  getIdSuccess,
  logoutSucces,
  putSuccess,
  getValueSuccess
} from "./actions";

const initialState = {
  accidents: []
};

const accidents = handleActions(
  {
    [fetchSuccess]: (state, action) => ({
      ...state,
      accidents: action.payload.accident
    })
  },
  initialState
);

export default accidents;
