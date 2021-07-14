import { charactersActionTypes } from './characters.types';
import api from '../../utils/api.utils';
import { PEOPLE } from '../../utils/constants.utils';
import { updateCharactersProperties } from '../../utils/functions.utils';

const loadCharactersStart = () => ({
  type: charactersActionTypes.LOAD_CHARACTERS_START,
});

const loadCharactersSuccess = (characters) => ({
  type: charactersActionTypes.LOAD_CHARACTERS_SUCCESS,
  payload: characters,
});

const loadCharactersFailure = (error) => ({
  type: charactersActionTypes.LOAD_CHARACTERS_FAILURE,
  payload: error,
});

export const loadCharacters = async (dispatch) => {
  dispatch(loadCharactersStart());

  try {
    const data = await api.getData(PEOPLE);
    const characters = updateCharactersProperties(data);
    dispatch(loadCharactersSuccess(characters));
  } catch (error) {
    dispatch(loadCharactersFailure(error));
  }
};

export default loadCharacters;
