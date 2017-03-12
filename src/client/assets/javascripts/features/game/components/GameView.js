import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as gameActions, selector } from '../';
import GameLayout from './GameLayout';

/**
 * Main Game View component.
 */

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(gameActions, dispatch)
}))
export default class GameView extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    const { actions } = this.props;
    actions
      .getLayout()
      .then(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        { !isLoading ? <GameLayout {...this.props} /> : 'Loading...' }
      </div>
    );
  }
}
