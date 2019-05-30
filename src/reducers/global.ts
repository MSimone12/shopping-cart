import { Reducer } from 'redux';
import { GlobalState } from '../types';
import { GlobalTypes } from '../constants/types';

const initialState: GlobalState = {
  loading: false,
};

const reducer: Reducer<GlobalState> = (state = initialState, action) => {
  switch (action.type) {
    case GlobalTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GlobalTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
