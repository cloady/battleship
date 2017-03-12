import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import game, { NAME as gameName } from '../features/game';

export default combineReducers({
  routing,
  [gameName]: game
});
