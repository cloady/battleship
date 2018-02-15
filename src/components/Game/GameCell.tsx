/**
 * GameCell component.
 */
import * as React from 'react';
import { isFunction } from 'lodash';

interface IProps {
  /** Click on cell callback; */
  onCellClick: Function;
  /** Is hited cell. */
  isHit: boolean;
  /** Is missed cell. */
  isMiss: boolean;
  /** Cell tile X position.  */
  xPos: Number;
  /** Cell tile Y position. */
  yPos: Number;
}

/**
 * Game Cell component.
 */
export default (props: IProps) => {
  const handleClickCell = (i: Number, j: Number) => {
    const { onCellClick } = props;

    if (isFunction(onCellClick)) {
      onCellClick(i, j);
    }
  };

  const { isHit, isMiss, xPos, yPos } = props;

  return ( 
    <div
      className="game__cell"
      onClick={() => handleClickCell(xPos, yPos)}
    >
      {isHit ? <i className="game__shot game__shot-hit" /> : null}
      {isMiss ? <i className="game__shot game__shot-miss" /> : null}
    </div>
  );
};
