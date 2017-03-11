import React, {Component} from 'react';
import { padStart } from 'lodash';
import { coordsInArray } from '../../../../utils';

export default class Sidebar extends Component {
  render() {
    const { ships, hits, miss } = this.props;

    return <div className="sidebar col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <div className="container-fluid">
        <div className="playerInfo row">
          <div className="playerInfo__display playerInfo__display-1 col-xs-6 col-md-6 col-sm-6 col-lg-6">
                    <span className="playerInfo__score">
                      {padStart((hits.length-miss.length)*10, 3, '0')}
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
          (ship) => <div className="assetInfo row">
            <div className={`col-xs-6 col-md-6 col-sm-6 col-lg-6 assetInfo__ship assetInfo__ship-${ship.ship}`}></div>
            <div className="col-xs-6 col-md-6 col-sm-6 col-lg-6 assetInfo__stats">
              {
                ship.positions.map(
                  (pos) => <span className={`assetInfo__stat assetInfo__stat-${coordsInArray(hits, pos) ? 'hit' : 'miss'}`}/>
                )
              }
            </div>
          </div>
        ) }

      </div>
    </div>;
  }
}
