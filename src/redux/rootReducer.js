import { combineReducers } from 'redux';
import { sprintReducer } from './sprintReducer';
import { audioCallReducer } from './audioCallReducer';
import { answeredReducer } from './answeredReducer';
import { answeredCorrectReducer } from './answeredCorrectReducer'

export const rootReducer = combineReducers({

    sprintReducer,
    audioCallReducer,
    answeredReducer,
    answeredCorrectReducer

});