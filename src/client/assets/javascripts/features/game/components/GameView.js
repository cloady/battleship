import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as gameActions, selector } from '../';
import GameLayout from './GameLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(gameActions, dispatch)
}))
export default class GameView extends Component {
  render() {
    return (
      <div>
        <GameLayout {...this.props} />
      </div>
    );
  }
}
