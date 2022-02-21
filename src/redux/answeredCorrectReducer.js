import { ANSWERED_CORRECT } from "./types";

const initialState = {
  correct: 0
}

export const answeredCorrectReducer = (state = initialState, action) => {

  switch (action.type) {

    case ANSWERED_CORRECT:
      return {
        ...state,
        correct: state.correct + 1
      }

    default:
      return state;

  }

}