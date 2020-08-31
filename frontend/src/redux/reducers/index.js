import { combineReducers } from 'redux'
import stockReducer from './stockReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  stockReducer,
  newsReducer,
})