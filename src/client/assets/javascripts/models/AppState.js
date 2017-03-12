type ShipData = {
  ship: string,
  positions: Array<Array<number>>
};

// This is the model of our module state
export type State = {
  friends: number[],
  layout: Array<ShipData>
};
