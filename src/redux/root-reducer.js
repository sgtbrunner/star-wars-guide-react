import { combineReducers } from 'redux';

import charactersReducer from './characters/characters.reducer';
import filmsReducer from './films/films.reducer';
import planetsReducer from './planets/planets.reducer';
import speciesReducer from './species/species.reducer';
import starshipsReducer from './starships/starships.reducer';
import vehiclesReducer from './vehicles/vehicles.reducer';

export default combineReducers({
  characters: charactersReducer,
  films: filmsReducer,
  planets: planetsReducer,
  species: speciesReducer,
  starships: starshipsReducer,
  vehicles: vehiclesReducer,
});
