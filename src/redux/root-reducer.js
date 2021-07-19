import { combineReducers } from 'redux';

import charactersReducer from './characters/characters.reducer';
import dialogReducer from './dialog/dialog.reducer';
import filmsReducer from './films/films.reducer';
import planetsReducer from './planets/planets.reducer';
import speciesReducer from './species/species.reducer';

export default combineReducers({
  characters: charactersReducer,
  films: filmsReducer,
  planets: planetsReducer,
  species: speciesReducer,
  dialog: dialogReducer,
});
