import speciesActionTypes from './species.types';
import api from '../../utils/api.utils';
import { SPECIES } from '../../utils/constants.utils';

const loadSpeciesStart = () => ({
  type: speciesActionTypes.LOAD_SPECIES_START,
});

const loadSpeciesSuccess = (species) => ({
  type: speciesActionTypes.LOAD_SPECIES_SUCCESS,
  payload: species,
});

const loadSpeciesFailure = (error) => ({
  type: speciesActionTypes.LOAD_SPECIES_FAILURE,
  payload: error,
});

const loadSpecies = async (dispatch) => {
  dispatch(loadSpeciesStart());

  try {
    const species = await api.getData(SPECIES);
    dispatch(loadSpeciesSuccess(species));
  } catch (error) {
    dispatch(loadSpeciesFailure(error));
  }
};

export default loadSpecies;
