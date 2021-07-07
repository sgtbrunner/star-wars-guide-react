import { charactersActionTypes } from './characters.types';

export const getCharacters = () => ({
  type: charactersActionTypes.GET_CHARACTERS,
});
