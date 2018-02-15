import * as React from 'react';
import { isFunction } from 'lodash';
import { coordsInArray } from '../../utils';
import GameCell from './GameCell';
import GameRow from './GameRow';

import './Game.css';

interface IProps {
  /** On cell click callback. */
  onCellClick: Function;
  /** Hit shoots coordinates. */
  hitShoots: Array<Array<Number>>;
  /** Miss shoots coordinates. */
  missShoots: Array<Array<Number>>;
}

/**
 * Game Matrix component.
 */
export default (props: IProps) => {
  const handleClickCell = (i: Number, j: Number) => {
    const { onCellClick } = props;

    if (isFunction(onCellClick)) {
      onCellClick(i, j);
    }
  };

  const renderBody = () => {
    const { hitShoots, missShoots } = props;

    let matrix = [];

    for (let i = 0; i < 10; i++) {
      let row = [];

      for (let j = 0; j < 10; j++) {
        row.push(
          <GameCell
            key={j}
            isHit={coordsInArray(hitShoots, [i, j])}
            isMiss={coordsInArray(missShoots, [i, j])}
            xPos={i}
            yPos={j}
            onCellClick={(xPos: Number, yPos: Number) => handleClickCell(xPos, yPos)}
          />
        );
      }

      matrix.push(
        <GameRow key={i}>
          {row}
        </GameRow>
      );
    }

    return matrix;
  };

  return (
    <div className="game">
      {renderBody()}
    </div>
  );
};
