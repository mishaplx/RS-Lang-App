import { ADD_WORD } from "./types";
import { ADD_WORD_COUNT } from "./types";
import { ADD_HARD_WORD } from "./types";

export function incrementWords() {


    return {
        type: ADD_WORD
    }
}

export function incrementWordsA() {
    return {
        type: ADD_WORD_COUNT
    }
}

export function addHardWord(wordEnglish, wordTranslate){
    return {
        type: ADD_HARD_WORD,
        data:{
            wordEnglish,
            wordTranslate
        }
    }
}