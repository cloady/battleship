/**
 * GameCell component.
 */
import React, { Component } from 'react';
import { isFunction } from 'lodash';

export default class GameCell extends React.Component {
  handleClickCell(i, j) {
    const { onCellClick } = this.props;

    isFunction(onCellClick) && onCellClick(i, j);
  }

  render() {
    const { isHit, isMiss, xPos, yPos } = this.props;

    return <div
      className="game__cell"
      onClick={() => this.handleClickCell(xPos, yPos)}
    >
      {isHit ? <i className="game__shot game__shot-hit" /> : null}
      {isMiss ? <i className="game__shot game__shot-miss" /> : null}
    </div>;
  }
}

