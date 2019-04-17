import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the hadithList state domain
 */

const selectHadithListDomain = state => state.get('hadithList', initialState);

const makeSelectHadithList = () => createSelector(selectHadithListDomain, substate => substate.toJS());

const makeSelectLoading = () => createSelector(selectHadithListDomain, countryListState => countryListState.get('loading'));

const makeSelectError = () => createSelector(selectHadithListDomain, countryListState => countryListState.get('error'));

const makeSelectHadiths = () =>
  createSelector(selectHadithListDomain, countryListState => countryListState.get('hadiths'));

export default makeSelectHadithList;
export { selectHadithListDomain, makeSelectLoading, makeSelectError, makeSelectHadiths };
