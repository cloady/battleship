import { some } from 'lodash';

/**
 * Find coordinates in array.
 * 
 * @param {Array<Array<Number>>} array Haystack array.
 * @param {Array<Number>} coords Needle coords.
 */
export default function coordsInArray(array: Array<Array<Number>>, coords: Array<Number>) {
  return some(array, coord => coord[0] === coords[0] && coord[1] === coords[1]);
}
