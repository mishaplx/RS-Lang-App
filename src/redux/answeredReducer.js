import { ANSWERED_COUNT } from "./types";

const initialState = {
  count: 0
}

export const answeredReducer = (state = initialState, action) => {

  switch (action.type) {

    case ANSWERED_COUNT:
      return {
        ...state,
        count: state.count + 1
      }

    default:
      return state;

  }

}