import { ADD_HARD_WORD } from "./types";

const initialState = {
  words:[]
}

export const addHardWordReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_HARD_WORD:
      return {
        ...state,
        words: [...state.words,action.data]
      }

    default:
      return state;

  }

}