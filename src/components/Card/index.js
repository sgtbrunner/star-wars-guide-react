import { connect } from 'react-redux';

import { openDialog } from '../../redux/dialog/dialog.actions';
import Card from './card.component';

const mapDispatchToProps = (dispatch) => ({
  openDialog: (card) => openDialog(dispatch, Number(card.target.id)),
});

export default connect(null, mapDispatchToProps)(Card);
