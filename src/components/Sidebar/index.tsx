import * as React from 'react';
import { IShipData } from '../../models';

import PlayerInfo from '../PlayerInfo';
import ShipAssets from '../ShipAssets';

import './Sidebar.css';

interface IProps {
  /** Calculated hits. */
  hits: Array<Array<Number>>;
  /** Calculated misses. */
  misses: Array<Array<Number>>;
  /** List of ships locations. */
  ships: Array<IShipData>;
}

export default (props: IProps) => {
    const { ships, hits, misses } = props;

    /** 
     * Get scores number. 
     * @todo. Move to redux state.
     */
    const getScore = () => {
      return (hits.length - misses.length) * 10;
    };

    return (
    <div className="sidebar col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <div className="container-fluid">
        <div className="playerInfo row">
          <PlayerInfo score={getScore()} className="playerInfo__display-1">
            Player1
          </PlayerInfo>

          <PlayerInfo score={0} className="playerInfo__display-2">
            Player2
          </PlayerInfo>
        </div>

        <ShipAssets ships={ships} hits={hits} />
      </div>
    </div>
  );
};
