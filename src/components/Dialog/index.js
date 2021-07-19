import { connect } from 'react-redux';

import { closeDialog } from '../../redux/dialog/dialog.actions';
import Dialog from './dialog.component';

const isDialogDataLoaded = (state) => {
  const { films, planets, species } = state;
  return [films.data.length, planets.data.length, species.data.length].every(
    (itemLength) => itemLength
  );
};

const mapStateToProps = (state) => ({
  characterId: state.dialog.characterId,
  characters: state.characters.data,
  films: state.films.data,
  planets: state.planets.data,
  species: state.species.data,
  isDialogDataLoaded: isDialogDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => closeDialog(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
