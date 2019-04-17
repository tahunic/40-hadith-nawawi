/*
 *
 * HadithDetails reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_HADITH, LOAD_HADITH_ERROR, LOAD_HADITH_SUCCESS } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  hadith: null,
});

function hadithDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HADITH:
      return state.set('loading', true).set('error', false);
    case LOAD_HADITH_SUCCESS:
      return state.set('loading', false).set('hadith', action.hadith);
    case LOAD_HADITH_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default hadithDetailsReducer;
