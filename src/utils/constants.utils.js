export const BASE_API_URL = 'https://swapi.dev/api/';
export const BASE_IMAGE_URL = 'https://starwars-visualguide.com/assets/img/characters/';
export const FILMS = 'films';
export const PEOPLE = 'people';
export const PLANETS = 'planets';
export const SPECIES = 'species';
export const STARSHIPS = 'starships';
export const VEHICLES = 'vehicles';

export const DATA_INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: null,
};

export const DIALOG_INITIAL_STATE = {
  isOpen: false,
  characterId: null,
};
