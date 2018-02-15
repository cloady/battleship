import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject } from 'redux';

import { GameActions } from '../actions';
import { selector } from '../selectors';

import { IAppState } from '../models';

import GameLayout from './GameLayout';

interface IState {
  isLoading: boolean;
}

interface IProps {
  /** Actions list. */
  actions: ActionCreatorsMapObject;
  /** Game data. */
  data: IAppState;
}

/**
 * Main Game View component.
 */
export default connect(selector, (dispatch: Dispatch<void>) => ({
  actions: bindActionCreators<ActionCreatorsMapObject>(GameActions, dispatch)
}))(
class GameView extends React.Component<IProps, IState> {
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
        {!isLoading ? <GameLayout {...this.props} /> : 'Loading...'}
      </div>
    );
  }
});