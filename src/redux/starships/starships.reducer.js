import starshipsActionTypes from './starships.types';
import { INITIAL_STATE } from '../../utils/constants.utils';

const starshipsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case starshipsActionTypes.LOAD_STARTSHIPS_START:
      return {
        ...state,
        isLoading: true,
      };
    case starshipsActionTypes.LOAD_STARTSHIPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case starshipsActionTypes.LOAD_STARTSHIPS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default starshipsReducer;
