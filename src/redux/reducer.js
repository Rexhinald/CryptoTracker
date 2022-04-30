import {combineReducers} from 'redux';
import reducers from './reducers';

export const appReducers = combineReducers({...reducers});
