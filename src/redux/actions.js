import { ADD_WORD, SET_RIGHT_ANSWERS, SET_BEST_SERIES, ADD_RIGHT_ANSWER, ADD_WRONG_ANSWER } from "./types";
import { ADD_WORD_COUNT } from "./types";
import { ANSWERED_COUNT } from "./types";
import { ANSWERED_CORRECT } from "./types";
import { ADD_HARD_WORD } from "./types";



export function incrementWords() {


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

export function incrementWordsA() {
    return {
        type: ADD_WORD_COUNT
    }
}

export function incrementAnswered() {
    return {
        type: ANSWERED_COUNT
    }
}

export function incrementAnsweredCorrect() {
    return {
        type: ANSWERED_CORRECT
    }
}
export function addHardWord(wordEnglish, wordTranslate) {
    return {
        type: ADD_HARD_WORD,
        data: {
            wordEnglish,
            wordTranslate
        }
    }
}