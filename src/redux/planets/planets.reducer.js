import planetActionTypes from './planets.types';
import { DATA_INITIAL_STATE } from '../../utils/constants.utils';

const planetsReducer = (state = DATA_INITIAL_STATE, action) => {
  switch (action.type) {
    case planetActionTypes.LOAD_PLANET_START:
      return {
        ...state,
        isLoading: true,
      };
    case planetActionTypes.LOAD_PLANET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case planetActionTypes.LOAD_PLANET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default planetsReducer;
