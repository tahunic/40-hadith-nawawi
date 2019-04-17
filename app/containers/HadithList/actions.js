/*
 *
 * HadithList actions
 *
 */

import { LOAD_HADITHS, LOAD_HADITHS_ERROR, LOAD_HADITHS_SUCCESS } from './constants';

export function loadHadiths() {
  return {
    type: LOAD_HADITHS,
  };
}

export function hadithsLoaded(hadiths) {
  return {
    type: LOAD_HADITHS_SUCCESS,
    hadiths,
  };
}

export function hadithsLoadingError(error) {
  return {
    type: LOAD_HADITHS_ERROR,
    error,
  };
}
