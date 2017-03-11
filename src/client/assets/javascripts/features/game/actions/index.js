import GameService from '../services/GameService';

// Actions
const GameActions = {
  SHOOT_CELL: 'redux-app/battleship/SHOOT_CELL',
  GET_LAYOUT: 'redux-app/battleship/GET_LAYOUT'
};

// Action creators

function shootCell(x: number, y: number) {
  return {
    type: GameActions.SHOOT_CELL,
    x,
    y,
    payload: GameService.shootCell()
  };
}

function getLayout() {
  return {
    type: GameActions.GET_LAYOUT,
    payload: GameService.getLayout()
  };
}

export {
  shootCell,
  getLayout
}

export default GameActions;
