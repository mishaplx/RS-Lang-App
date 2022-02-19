import { ADD_WORD_COUNT } from "./types";

const initialState = {
  words: 0
}

export const audioCallReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_WORD_COUNT:
      return {
        ...state,
        words: state.words + 1
      }

    default:
      return state;

  }

}