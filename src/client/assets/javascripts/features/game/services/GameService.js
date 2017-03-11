/**
 * Abstract GameService API.
 * You can replace dependency with you API implementation.
 */
// Define the initial data and state for `game` module

/**
 * Mocked data
 */
const initialData = {
  "shipTypes": {
    "carrier": { "size": 5, "count": 1 },
    "battleship": { "size": 4, "count": 1 },
    "cruiser": { "size": 3, "count": 1 },
    "submarine": { "size": 3, "count": 1 },
    "destroyer": { "size": 2, "count": 1 },
  },
  "layout": [
    { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
    { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] },
    { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] },
    { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] },
    { "ship": "destroyer", "positions": [[0,0], [1,0]] }
  ]
};

const GameService = {
  /**
   * Get game layout.
   *
   * @returns {Promise}
   */

  getLayout() {
    return Promise.resolve(
      initialData
    );
  },

  /**
   * Shoot a ship.
   *
   * @param coords
   * @returns {Promise}
     */
  shootCell(coords) {
    return Promise.resolve({
      coords
    });
  }
};

export default GameService;
