import { connect } from 'react-redux';

import { closeDialog } from '../../redux/dialog/dialog.actions';
import Dialog from './dialog.component';

const isDialogDataLoaded = (state) => {
  const { films, planets, species, starships, vehicles } = state;
  return [
    films.data.length,
    planets.data.length,
    species.data.length,
    starships.data.length,
    vehicles.data.length,
  ].every((itemLength) => itemLength > 0);
};

const mapStateToProps = (state) => ({
  characterId: state.dialog.characterId,
  characters: state.characters.data,
  films: state.films.data,
  planets: state.planets.data,
  species: state.species.data,
  starships: state.starships.data,
  vehicles: state.vehicles.data,
  isDialogDataLoaded: isDialogDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => closeDialog(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
