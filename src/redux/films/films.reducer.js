import { filmsActionTypes } from './films.types';
import { DATA_INITIAL_STATE } from '../../utils/constants.utils';

const filmsReducer = (state = DATA_INITIAL_STATE, action) => {
  switch (action.type) {
    case filmsActionTypes.LOAD_FILMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case filmsActionTypes.LOAD_FILMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case filmsActionTypes.LOAD_FILMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default filmsReducer;
