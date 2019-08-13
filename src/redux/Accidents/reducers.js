import { handleActions } from 'redux-actions';
import {
  fetchSuccess,
} from './actions';

const initialState = {
  data: [
    {
      id: 1,
      type: 'Parking law',
      license: 'AT37457HJ',
      time: '22/22/1999',
      rating: 12,
    },
    {
      id: 2,
      type: 'Parking law',
      license: 'AT37457HJ',
      time: '22/22/1999',
      rating: 12,
    },
  ],
};

const accidents = handleActions(
  {
    [fetchSuccess]: (state, action) => ({
      ...state,
      accidents: action.payload.accident,
    }),
  },
  initialState,
);

export default accidents;
