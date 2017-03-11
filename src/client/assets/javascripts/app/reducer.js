import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import friends, { NAME as friendsName } from 'features/game';

export default combineReducers({
  routing,
  [friendsName]: friends
});
