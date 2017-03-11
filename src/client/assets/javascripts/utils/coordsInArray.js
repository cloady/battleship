import { some } from 'lodash';

// find coords in array

export default function coordsInArray(array, coords) {
  return some(array, coord => {
    return coord[0] === coords[0] && coord[1] === coords[1]
  });
}
