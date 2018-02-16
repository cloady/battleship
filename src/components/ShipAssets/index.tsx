import * as React from 'react';
import { find } from 'lodash';
import { IShipData } from '../../models';

interface IProps {
    ships: Array<IShipData>;
    hits: Array<Array<Number>>;
    /** Sinked ships */
    sinkedShips: Array<IShipData>;
}

export default (props: IProps) => {
    const {ships, sinkedShips} = props;
    return (
        <div>
            { ships.map(
                (ship, index) => <div key={index} className="assetInfo row">
                    <div 
                        className={`col-xs-6 col-md-6 col-sm-6 col-lg-6 assetInfo__ship assetInfo__ship-${ship.ship}`}
                    />
                    <div className="col-xs-6 col-md-6 col-sm-6 col-lg-6 assetInfo__stats">
                        {
                        ship.positions.map(
                            (pos, posIndex) => <span
                                key={posIndex}
                                className={
                                    !find(sinkedShips, (sinkedShip) => sinkedShip.ship === ship.ship) ? 
                                    'miss' : 
                                    'hit'
                                }
                            />
                        )
                        }
                    </div>
                    </div>
                )
            }
        </div>
    );
};
