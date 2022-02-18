import { createStore } from "redux";


const initialState = {
    words: 0

}

const reducer = (state = initialState, action) => {

    console.log('reducer', action);

    return state;
}