type ShipData = {
  ship: string,
  positions: Array<Array<number>>
};

// This is the model of our module state
export type State = {
  layout: Array<ShipData>
};
