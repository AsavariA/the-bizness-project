import { combineReducers } from "redux";
import biznessesReducers from './biznessesRducers';
import authReducers from './authReducers';

export default combineReducers({ biznessesReducers, authReducers });