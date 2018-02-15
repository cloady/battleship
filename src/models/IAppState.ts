import { IShipTypes } from './IShipTypes';
import { IShipData } from './IShipData';

/**
 * Current application state.
 */
export interface IAppState {
  /** Redux battleship hits state */
  hits: Array<Array<Number>>;
  /** Redux battleship misses state */
  misses: Array<Array<Number>>;
  /** Layout that defines current ship layout */
  layout: Array<IShipData>;
  /** Ship types list */
  shipTypes: IShipTypes;
}
