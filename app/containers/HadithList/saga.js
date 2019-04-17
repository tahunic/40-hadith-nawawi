import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';

import { LOAD_HADITHS } from './constants';
import { API_URL } from '../../utils/constants';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { hadithsLoaded, hadithsLoadingError } from './actions';

export function* getHadiths() {
  const locale = yield select(makeSelectLocale());
  const requestURL = `${API_URL}/hadiths/translation/${locale}`;

  try {
    const response = yield call(request, requestURL);

    yield put(hadithsLoaded(response.data));
  } catch (err) {
    yield put(hadithsLoadingError(err));
  }
}

// Individual exports for testing
export default function* hadithListSaga() {
  yield takeLatest(LOAD_HADITHS, getHadiths);
}
