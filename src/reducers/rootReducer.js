import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import reducerCounter from './reducerCounter';
export default combineReducers({
  simpleReducer,
  reducerCounter
});