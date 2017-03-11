import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import GameView from 'features/game/components/GameView';
import NotFoundView from 'components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GameView} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="/battleship" to="/" />
    <Redirect from="*" to="404" />
  </Route>
);
