import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
      shipTypes: {}
    }
  },
  applyMiddleware(promiseMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <GameView />
  </Provider>,
  document.getElementById('root') as HTMLElement
);