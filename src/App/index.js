import { connect } from 'react-redux';

import loadCharacters from '../redux/characters/characters.actions';
import loadFilms from '../redux/films/films.actions';
import loadPlanets from '../redux/planets/planets.actions';
import loadSpecies from '../redux/species/species.actions';
import loadStarships from '../redux/starships/starships.actions';
import loadVehicles from '../redux/vehicles/vehicles.actions';
import App from './App';

const mapStateToProps = (state) => ({
  isCharactersLoading: !state.characters.data.length,
  showDialog: state.dialog.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  loadCharacters: () => loadCharacters(dispatch),
  loadFilms: () => loadFilms(dispatch),
  loadPlanets: () => loadPlanets(dispatch),
  loadSpecies: () => loadSpecies(dispatch),
  loadStarships: () => loadStarships(dispatch),
  loadVehicles: () => loadVehicles(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
