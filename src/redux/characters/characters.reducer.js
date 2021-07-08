import { charactersActionTypes } from './characters.types';

import { createList } from '../../utils/functions.utils';

const INITIAL_STATE = {
  characters: [],
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  const fetchData = async () => {
    return await createList();
  };

  switch (action.type) {
    case charactersActionTypes.GET_CHARACTERS:
      return {
        ...state,
        characters: fetchData()
          .then((response) => response.json())
          .then((data) => {
            return data;
          }),
      };
    default:
      return state;
  }
};

export default charactersReducer;
