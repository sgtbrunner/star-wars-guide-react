import vehiclesActionTypes from './vehicles.types';
import { INITIAL_STATE } from '../../utils/constants.utils';

const vehiclesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case vehiclesActionTypes.LOAD_VEHICLES_START:
      return {
        ...state,
        isLoading: true,
      };
    case vehiclesActionTypes.LOAD_VEHICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case vehiclesActionTypes.LOAD_VEHICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default vehiclesReducer;
