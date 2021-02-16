import { combineReducers } from 'redux';
import authReducer from './authReducer';
import infoReducer from './infoReducer';

const root = combineReducers({
  auth: authReducer,
  info: infoReducer,
});

export default root;
