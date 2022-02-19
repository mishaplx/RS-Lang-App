import { combineReducers } from 'redux';
import { sprintReducer } from './sprintReducer';
import { audioCallReducer } from './audioCallReducer';

export const rootReducer = combineReducers({

    sprintReducer,
    audioCallReducer

});