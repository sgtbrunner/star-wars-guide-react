import dialogActionTypes from './dialog.types';
import { DIALOG_INITIAL_STATE } from '../../utils/constants.utils';

const dialogReducer = (state = DIALOG_INITIAL_STATE, action) => {
  switch (action.type) {
    case dialogActionTypes.OPEN_DIALOG:
      return {
        ...state,
        isOpen: true,
        characterId: action.payload,
      };
    case dialogActionTypes.CLOSE_DIALOG:
      return {
        ...state,
        ...DIALOG_INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default dialogReducer;
