import { ADD_WORD } from "./types";


const initialState = {
    words: 0
}


export const sprintReducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_WORD:
          return {
          ...state,
          words: state.words + 1   
        }    
        
        default:
            return state;

    }

}