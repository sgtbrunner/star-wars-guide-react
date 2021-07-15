import planetActionTypes from './planets.types';
import api from '../../utils/api.utils';
import { PLANETS } from '../../utils/constants.utils';

const loadPlanetsStart = () => ({
  type: planetActionTypes.LOAD_PLANET_START,
});

const loadPlanetsSuccess = (planets) => ({
  type: planetActionTypes.LOAD_PLANET_SUCCESS,
  payload: planets,
});

const loadPlanetsFailure = (error) => ({
  type: planetActionTypes.LOAD_PLANET_FAILURE,
  payload: error,
});

const loadPlanets = async (dispatch) => {
  dispatch(loadPlanetsStart());

  try {
    const planets = await api.getData(PLANETS);
    dispatch(loadPlanetsSuccess(planets));
  } catch (error) {
    dispatch(loadPlanetsFailure(error));
  }
};

export default loadPlanets;
