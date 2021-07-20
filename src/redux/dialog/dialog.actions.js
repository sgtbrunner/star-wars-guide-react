import dialogActionTypes from './dialog.types';

export const openDialog = (dispatch, cardId) => {
  document.body.style.overflowY = 'hidden';

  dispatch({
    type: dialogActionTypes.OPEN_DIALOG,
    payload: cardId,
  });
};

export const closeDialog = (dispatch) => {
  document.body.style.overflowY = 'initial';

  dispatch({
    type: dialogActionTypes.CLOSE_DIALOG,
  });
};
