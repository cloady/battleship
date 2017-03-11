// @flow

import { createStructuredSelector } from 'reselect';
import { shootCell, getLayout } from './actions';
import reducer from './reducers';

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'

// This will be used in our root reducer and selectors

export const NAME = 'game';

// Selectors

const data = (state) => state[NAME];

export default reducer;

export const selector = createStructuredSelector({
  data
});

export const actionCreators = {
  shootCell,
  getLayout
};
