import * as React from 'react';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import GameView from './components/GameView';
import appReducer from './reducers';
import { IAppState } from './models';
import { NAME } from './selectors';

import './index.css';

/**
 * Store interface.
 */
interface IStoreState {
  /** Defined AppState in store. */
  [NAME]: IAppState;
}

const store = createStore<IStoreState>(
  combineReducers({
    [NAME]: appReducer
  }),
  {
    [NAME]: {
      hits: [],
      misses: [],
      layout: [],
      sinkedShips: [],
      shipTypes: {}
    }
  },
  applyMiddleware(promiseMiddleware())
);

export const App = () => (
  <Provider store={store}>
    <GameView />
  </Provider>
);
