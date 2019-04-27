import { call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import request from '../../utils/request';

import { LOAD_HADITHS } from './constants';
import { API_URL } from '../../utils/constants';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { hadithsLoaded, hadithsLoadingError } from './actions';
import { makeSelectTerm } from '../Search/selectors';
import { makeSelectHadiths } from './selectors';

export function* getHadiths() {
  const locale = yield select(makeSelectLocale());
  const term = yield select(makeSelectTerm());
  const hadiths = yield select(makeSelectHadiths());
  const requestURL = `${API_URL}/hadiths/search`;

  try {
    if (hadiths) {
      yield call(delay, 300);
    }
    const response = yield call(request, `${requestURL}?term=${term}&translation=${locale}`);

    yield put(hadithsLoaded(response.data));
  } catch (err) {
    yield put(hadithsLoadingError(err));
  }
}

// Individual exports for testing
export default function* hadithListSaga() {
  yield takeLatest(LOAD_HADITHS, getHadiths);
}
