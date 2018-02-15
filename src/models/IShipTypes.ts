/**
 * Ship Types list.
 */
export interface IShipTypes {
    [type: string]: {
      /** Ship size */
      size: Number;
      /** Count of available ships */
      count: Number;
    };
}
