import { assign, every, some } from 'lodash';
import { Action } from 'redux';

import { IAppState } from '../models';
import { GET_LAYOUT, SHOOT_CELL } from '../actions';
import coordsInArray from '../utils/coordsInArray';

/**
 * Common payload.
 */
interface IAction extends Action {
  payload?: ICoordsPayload;
}

/**
 * Payload with coords.
 */
interface ICoordsPayload {
  coords: Array<Number>;
}

export const initialState: IAppState = {
  'hits': [],
  'misses': [],
  'layout': [],
  'shipTypes': {},
  'sinkedShips': []
};

/**
 * Application reducer.
 * 
 * @param {IAppState} state Application State.
 * @param {any} action Redux action.
 */
export default function reducer(state: IAppState = initialState, action: IAction): IAppState {
  switch (action.type) {
    /** Handle get layout action. */
    case `${GET_LAYOUT}_FULFILLED`:
      return assign({}, state, action.payload);
    
    /** Handle shoot cell action. */
    case `${SHOOT_CELL}_FULFILLED`:
      let { hits, misses, layout, sinkedShips } = state;
      const coords = (action.payload as ICoordsPayload).coords;

      const hasCollision = some(layout, ship => {
          const isHit = coordsInArray(ship.positions, coords);

          if (isHit) {
            // mutations of hits
            hits = state.hits.concat([coords]);
            if (every(ship.positions, coord => coordsInArray(hits, coord))) {
              sinkedShips.push(ship);
            }
          }

          return isHit;
        }
      );

      if (!hasCollision) {
        misses = state.misses.concat([coords]);
      }

      return {
        ...state,
        hits,
        misses,
      };

    default:
      return state;
  }
}
