import { createStructuredSelector } from 'reselect';
import { IAppState } from '../models';

export const NAME = 'game';

// Selectors

const data = (state: IAppState) => state[NAME];

export const selector = createStructuredSelector({
  data
});
