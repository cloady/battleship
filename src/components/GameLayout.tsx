import * as React from 'react';
import Game from './Game';
import Sidebar from './Sidebar';
import { ActionCreatorsMapObject } from 'redux';

import { IAppState } from '../models';

import 'bootstrap/dist/css/bootstrap.css';
import './GameLayout.css';

interface IProps {
  data: IAppState;
  actions: ActionCreatorsMapObject;
}

export default (props: IProps) => {
  const { data, actions } = props;

  return (
    <div className="container wrapper">
      <div className="row">
        <div className="content col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <Game
            hitShoots={data.hits}
            missShoots={data.misses}
            onCellClick={actions.shootCell}
          />
        </div>
        <Sidebar
          sinkedShips={data.sinkedShips}
          ships={data.layout}
          hits={data.hits}
          misses={data.misses}
        />
      </div>
    </div>
  );
};
