import React, { Component } from 'react';
import { isFunction } from 'lodash';
import { coordsInArray } from '../../../../utils';
import GameCell from './GameCell';
import GameRow from './GameRow';

import './Game.scss';

export default class GameMatrix extends Component {
  handleClickCell(i, j) {
    const { onCellClick } = this.props;

    isFunction(onCellClick) && onCellClick(i, j);
  }

  renderRow(i) {
    const { hitShoots, missShoots } = this.props;

    let row = [];

    for(let j=0; j<10; j++) {
      row.push(
        <div
          key={j}
          className="game__cell"
          onClick={() => this.handleClickCell(i, j)}
        >
          {coordsInArray(hitShoots, [i, j]) ? <i className="game__shot game__shot-hit" /> : null}
          {coordsInArray(missShoots, [i, j]) ? <i className="game__shot game__shot-miss" /> : null}
        </div>
      );
    }

    return row;
  }

  renderBody() {
    let matrix = [];

    for(let i=0; i<10; i++) {
      matrix.push(
        <div key={i} className="game__row">
          {this.renderRow(i)}
        </div>
      )
    }

    return matrix;
  }

  render() {
    return <div className="game">
      {this.renderBody()}
    </div>;
  }
}
