import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducers.js';

const reducers = combineReducers({
    countriesReducer
});

export default reducers;