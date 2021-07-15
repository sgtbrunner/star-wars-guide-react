import starshipsActionTypes from './starships.types';
import api from '../../utils/api.utils';
import { STARSHIPS } from '../../utils/constants.utils';

const loadStarshipsStart = () => ({
  type: starshipsActionTypes.LOAD_STARTSHIPS_START,
});

const loadStarshipsSuccess = (starships) => ({
  type: starshipsActionTypes.LOAD_STARTSHIPS_SUCCESS,
  payload: starships,
});

const loadStarshipsFailure = (error) => ({
  type: starshipsActionTypes.LOAD_STARTSHIPS_FAILURE,
  payload: error,
});

const loadStarships = async (dispatch) => {
  dispatch(loadStarshipsStart());

  try {
    const starships = await api.getData(STARSHIPS);
    dispatch(loadStarshipsSuccess(starships));
  } catch (error) {
    dispatch(loadStarshipsFailure(error));
  }
};

export default loadStarships;
