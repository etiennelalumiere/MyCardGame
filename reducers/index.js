import { combineReducers } from 'redux';
import players from './players';
import selections from './selections';

export default combineReducers({
  players,
  selections
});