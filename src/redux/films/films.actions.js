import { filmsActionTypes } from './films.types';
import api from '../../utils/api.utils';
import { FILMS } from '../../utils/constants.utils';

const loadFilmsStart = () => ({
  type: filmsActionTypes.LOAD_FILMS_START,
});

const loadFilmsSuccess = (films) => ({
  type: filmsActionTypes.LOAD_FILMS_SUCCESS,
  payload: films,
});

const loadFilmsError = (error) => ({
  type: filmsActionTypes.LOAD_FILMS_FAILURE,
  payload: error,
});

const loadFilms = async (dispatch) => {
  dispatch(loadFilmsStart());
  try {
    const films = await api.getData(FILMS);
    dispatch(loadFilmsSuccess(films));
  } catch (error) {
    dispatch(loadFilmsError(error));
  }
};

export default loadFilms;
