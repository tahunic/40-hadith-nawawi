/*
 *
 * Search reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_TERM } from './constants';

export const initialState = fromJS({
  term: '',
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TERM:
      return state.set('term', action.term);
    default:
      return state;
  }
}

export default searchReducer;
