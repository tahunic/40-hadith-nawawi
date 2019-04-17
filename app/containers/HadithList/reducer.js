/*
 *
 * HadithList reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_HADITHS, LOAD_HADITHS_ERROR, LOAD_HADITHS_SUCCESS } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  hadiths: null,
});

function hadithListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HADITHS:
      return state.set('loading', true).set('error', false);
    case LOAD_HADITHS_SUCCESS:
      return state.set('loading', false).set('hadiths', action.hadiths);
    case LOAD_HADITHS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default hadithListReducer;
