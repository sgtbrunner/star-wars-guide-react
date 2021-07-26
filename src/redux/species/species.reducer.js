import speciesActionTypes from './species.types';
import { DATA_INITIAL_STATE } from '../../utils/constants.utils';

const speciesReducer = (state = DATA_INITIAL_STATE, action) => {
  switch (action.type) {
    case speciesActionTypes.LOAD_SPECIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case speciesActionTypes.LOAD_SPECIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case speciesActionTypes.LOAD_SPECIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default speciesReducer;
