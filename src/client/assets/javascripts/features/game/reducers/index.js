import {assign, every, filter, findIndex, some} from 'lodash';

import { State } from '../../../models/AppState';
import GameActions from '../actions';
import coordsInArray from '../../../utils/coordsInArray';

const initialState: State = {
  "hits": [],
  "misses": [],
  "layout": [],
  "shipTypes": {}
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
    case GameActions.GET_LAYOUT:
      return assign({}, state, action.payload);
      break;

    case GameActions.SHOOT_CELL: {
      let { hits, misses, layout } = state;
      const coords = [action.x, action.y];

      const hasCollision = some(layout,
        ship => {
          const isHit = coordsInArray(ship.positions, coords);

          if (isHit) {
            // mutations of hits
            console.warn('Hit', ship);
            hits = state.hits.concat([coords]);
            if (every(ship.positions, coord => coordsInArray(hits, coord)))
            {
              // sanked ship alert
              console.warn('Sinked', ship);
            }
          }

          return isHit;
        }
      );

      if (!hasCollision) {
        console.error('Missed');
        misses = state.misses.concat([coords]);
      }

      return {
        ...state,
        hits,
        misses,
      }
    }

    default:
      return state;
  }
}
