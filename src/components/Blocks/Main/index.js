import { connect } from 'react-redux';

import Main from './main.component';

const mapStateToProps = (state) => ({
  characters: state.characters.data,
});

export default connect(mapStateToProps)(Main);
