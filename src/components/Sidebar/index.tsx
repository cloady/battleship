import * as React from 'react';
import { padStart } from 'lodash';
import { coordsInArray } from '../../utils';
import { IShipData } from '../../models';

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
      return ((hits.length - misses.length) * 10).toString();
    };

    return (
    <div className="sidebar col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <div className="container-fluid">
        <div className="playerInfo row">
          <div className="playerInfo__display playerInfo__display-1 col-xs-6 col-md-6 col-sm-6 col-lg-6">
                    <span className="playerInfo__score">
                      {padStart(getScore(), 3, '0')}
                    </span>
            <hr className="playerInfo__divider" />
                    <span className="playerInfo__name">
                      Player 1
                    </span>
          </div>

          <div className="playerInfo__display playerInfo__display-2 col-xs-6 col-md-6 col-sm-6 col-lg-6">
                    <span className="playerInfo__score">
                      000
                    </span>
            <hr className="playerInfo__divider" />
                    <span className="playerInfo__name">
                      Player 2
                    </span>
          </div>
        </div>

        { ships.map(
          (ship, index) => <div key={index} className="assetInfo row">
            <div className={`col-xs-6 col-md-6 col-sm-6 col-lg-6 assetInfo__ship assetInfo__ship-${ship.ship}`} />
            <div className="col-xs-6 col-md-6 col-sm-6 col-lg-6 assetInfo__stats">
              {
                ship.positions.map(
                  (pos, posIndex) => <span
                    key={posIndex}
                    className={`assetInfo__stat assetInfo__stat-${coordsInArray(hits, pos) ? 'hit' : 'miss'}`}
                  />
                )
              }
            </div>
          </div>
        ) }

      </div>
    </div>
  );
};
