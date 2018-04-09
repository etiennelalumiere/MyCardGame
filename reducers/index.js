import { combineReducers } from 'redux';
import players from './players';
import selections from './selections';
import decks from './decks';

export default combineReducers({
  players,
  selections,
  decks
});