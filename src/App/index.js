import { connect } from 'react-redux';

import { loadCharacters } from '../redux/characters/characters.actions';
import App from './App';

const mapStateToProps = (state) => ({
  characters: state.characters.data || [],
});

const mapDispatchToProps = (dispatch) => ({
  loadCharacters: () => loadCharacters(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
