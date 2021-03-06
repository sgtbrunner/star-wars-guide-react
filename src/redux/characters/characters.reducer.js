import charactersActionTypes from './characters.types';
import { INITIAL_STATE } from '../../utils/constants.utils';

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case charactersActionTypes.LOAD_CHARACTERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case charactersActionTypes.LOAD_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case charactersActionTypes.LOAD_CHARACTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
