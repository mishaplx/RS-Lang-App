import { ADD_WORD, SET_RIGHT_ANSWERS, SET_BEST_SERIES, ADD_RIGHT_ANSWER, ADD_WRONG_ANSWER } from "./types";


const initialState = {
    
    learnWords: 0,
    rightAnswers: 0,
    bestSeries: 0,
    rightAnswersId: [],
    wrongAnswersId: []
}


export const sprintReducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_WORD:
          return {
          ...state,
          learnWords: state.learnWords + 1   
        }

        case SET_RIGHT_ANSWERS:
            if(!state.rightAnswers){
                return {
      
                  ...state,
                  rightAnswers: action.value
                }
            }else{
            
                return {
      
            ...state,
            rightAnswers: (state.rightAnswers + action.value) / 2 
            }
        }

        case SET_BEST_SERIES:
                
            return {
                ...state,
                bestSeries: action.value
        }

        case ADD_RIGHT_ANSWER:
                
            return {
                ...state,
                rightAnswersId: [...state.rightAnswersId, action.id]
        }

        case ADD_WRONG_ANSWER:
                
            return {
                ...state,
                wrongAnswersId: [...state.wrongAnswersId, action.id]
        }
              

            default:
            return state;

    }

}