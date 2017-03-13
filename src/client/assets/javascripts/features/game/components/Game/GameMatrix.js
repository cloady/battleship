/**
 * Game matrix component.
 */
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

  renderBody() {
    const { hitShoots, missShoots } = this.props;

    let matrix = [];

    for(let i=0; i<10; i++) {
      let row = [];

      for(let j=0; j<10; j++) {
        row.push(
          <GameCell
            key={j}
            isHit={coordsInArray(hitShoots, [i, j])}
            isMiss={coordsInArray(missShoots, [i, j])}
            xPos={i}
            yPos={j}
            onCellClick={(xPos, yPos) => this.handleClickCell(xPos, yPos)}
          />
        );
      }

      matrix.push(
        <GameRow key={i}>
          { row }
        </GameRow>
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
