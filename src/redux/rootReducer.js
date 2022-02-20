import { combineReducers } from 'redux';
import { sprintReducer } from './sprintReducer';
import { audioCallReducer } from './audioCallReducer';
import { addHardWordReducer } from './addHardWordReducer';

export const rootReducer = combineReducers({

    sprintReducer,
    audioCallReducer,
    addHardWordReducer,
});