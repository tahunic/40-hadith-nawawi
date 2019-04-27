/*
 *
 * Search actions
 *
 */

import { CHANGE_TERM } from './constants';

export function changeTerm(term) {
  return {
    type: CHANGE_TERM,
    term,
  };
}
