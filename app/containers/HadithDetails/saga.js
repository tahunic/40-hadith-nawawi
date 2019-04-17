import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { API_URL } from '../../utils/constants';
import { LOAD_HADITH } from './constants';
import { hadithLoaded, hadithLoadingError } from './actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export function* getHadith(action) {
  const requestURL = `${API_URL}/hadiths/byIndex`;
  const { index } = action;
  const locale = yield select(makeSelectLocale());

  try {
    const response = yield call(request, `${requestURL}?index=${index}&translation=${locale}`);

    yield put(hadithLoaded(response.data));
  } catch (err) {
    yield put(hadithLoadingError(err));
  }
}
// Individual exports for testing
export default function* hadithDetailsSaga() {
  yield takeLatest(LOAD_HADITH, getHadith);
}
