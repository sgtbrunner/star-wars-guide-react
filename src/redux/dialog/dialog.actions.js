import dialogActionTypes from './dialog.types';

export const openDialog = (dispatch, cardId) => {
  dispatch({
    type: dialogActionTypes.OPEN_DIALOG,
    payload: cardId,
  });
};

export const closeDialog = (dispatch) => {
  dispatch({
    type: dialogActionTypes.CLOSE_DIALOG,
  });
};
