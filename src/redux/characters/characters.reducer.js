import { charactersActionTypes } from './characters.types';

import { createList } from '../../utils/supportFunctions.utils';

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
          })
          .catch((error) => console.log(error)),
      };
    default:
      return state;
  }
};

export default charactersReducer;
