import { ADD_WORD, SET_RIGHT_ANSWERS, SET_BEST_SERIES, ADD_RIGHT_ANSWER, ADD_WRONG_ANSWER } from "./types";

export function incrementWords (){
    return {
        type: ADD_WORD
    }
}


export function setRightAnswers (value){
    return {
        type: SET_RIGHT_ANSWERS, value
    }
}

export function setBestSeries (value){
    return {
        type: SET_BEST_SERIES, value
    }
}


export function addRightAnswer (id){
    return {
        type: ADD_RIGHT_ANSWER, id: id
    }
}

export function addWrongAnswer (id){
    return {
        type: ADD_WRONG_ANSWER, id: id
    }
}