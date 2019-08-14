import { handleActions } from 'redux-actions';
import {
  fetchSuccess,
} from './actions';

const initialState = {
  data: [
    {
      id: 1,
      type: 'Parking law',
      license: 'AX87678YU',
      time: '11/11/2019',
      rating: 12,
      actions: '',
    },
    {
      id: 2,
      type: 'Parking law',
      license: 'AX87678YU',
      time: '11/11/2019',
      rating: 12,
      actions: '',
    },
    {
      id: 3,
      type: 'Parking law',
      license: 'AX87678YU',
      time: '11/11/2019',
      rating: 12,
      actions: '',
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
