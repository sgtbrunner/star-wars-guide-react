import dialogActionTypes from './dialog.types';

const INITIAL_STATE = {
  isOpen: false,
  characterId: null,
};

const dialogReducer = (state = INITIAL_STATE, action) => {
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
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default dialogReducer;
