import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import charactersReducer from './characters/characters.reducer';
import dialogReducer from './dialog/dialog.reducer';
import filmsReducer from './films/films.reducer';
import planetsReducer from './planets/planets.reducer';
import speciesReducer from './species/species.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['dialog'],
};

const rootReducer = combineReducers({
  characters: charactersReducer,
  films: filmsReducer,
  planets: planetsReducer,
  species: speciesReducer,
  dialog: dialogReducer,
});

export default persistReducer(persistConfig, rootReducer);
