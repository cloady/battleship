import GameService from '../services/GameService';

// Actions
export const SHOOT_CELL = 'redux-app/battleship/SHOOT_CELL';
export const GET_LAYOUT = 'redux-app/battleship/GET_LAYOUT';

// Action creators
function shootCell(x: Number, y: Number): Object {
  return {
    type: SHOOT_CELL,
    x,
    y,
    payload: GameService.shootCell([x, y])
  };
}

function getLayout(): Object {
  return {
    type: GET_LAYOUT,
    payload: GameService.getLayout()
  };
}

export const GameActions = {
  shootCell,
  getLayout
};
