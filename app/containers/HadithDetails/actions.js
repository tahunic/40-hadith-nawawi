/*
 *
 * HadithDetails actions
 *
 */

import { LOAD_HADITH, LOAD_HADITH_ERROR, LOAD_HADITH_SUCCESS } from './constants';

export function loadHadith(index) {
  return {
    type: LOAD_HADITH,
    index,
  };
}

export function hadithLoaded(hadith) {
  return {
    type: LOAD_HADITH_SUCCESS,
    hadith,
  };
}

export function hadithLoadingError(error) {
  return {
    type: LOAD_HADITH_ERROR,
    error,
  };
}
