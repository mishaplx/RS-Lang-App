import { ADD_WORD } from "./types";
import { ADD_WORD_COUNT } from "./types";

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