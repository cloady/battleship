// @flow

import { createStructuredSelector } from 'reselect';
import {assign, every, filter, findIndex, some} from 'lodash';

import coordsInArray from '../../utils/coordsInArray';

import { State } from 'models/friends';

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'
const SHOOT_CELL = 'redux-app/battleship/SHOOT_CELL';

// This will be used in our root reducer and selectors

export const NAME = 'game';

// Define the initial data and state for `game` module

const initialData = {
  "shipTypes": {
    "carrier": { "size": 5, "count": 1 },
    "battleship": { "size": 4, "count": 1 },
    "cruiser": { "size": 3, "count": 1 },
    "submarine": { "size": 3, "count": 1 },
    "destroyer": { "size": 2, "count": 1 },
  },
  "layout": [
    { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
    { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] },
    { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] },
    { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] },
    { "ship": "destroyer", "positions": [[0,0], [1,0]] }
  ]
};

const initialState: State = {
  "hits": [],
  "miss": [],
  "ships": initialData.layout,
  "shipTypes": initialData.shipTypes
};

// Reducer

/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

export default function reducer(state: State = initialState, action: any = {}): State {
  switch (action.type) {
    case SHOOT_CELL: {
      let { hits, miss, ships } = state;
      const coords = [action.x, action.y];

      if (!some(ships,
        ship => {
          const isHit = coordsInArray(ship.positions, coords);

          if (isHit) {
            // mutations of hits
            console.warn('Hit', ship);
            hits = state.hits.concat([coords]);
            if (every(ship.positions, coord => coordsInArray(hits, coord)))
            {
              // sanked ship alert
              console.warn('Sanked', ship);
            }
          }

          return isHit;
        }
      )) {
        console.error('Missed');
        miss = state.miss.concat([coords]);
      }

      console.log({
        hits,
        miss,
      });

      return {
        ...state,
        hits,
        miss,
      }
    }

    default:
      return state;
  }
}

// Action Creators

function shootCell(x: number, y: number) {
  return {
    type: SHOOT_CELL,
    x,
    y
  };
}

// Selectors

const data = (state) => state[NAME];

export const selector = createStructuredSelector({
  data
});

export const actionCreators = {
  shootCell
};
