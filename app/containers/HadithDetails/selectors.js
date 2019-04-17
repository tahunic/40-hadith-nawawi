import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the hadithDetails state domain
 */

const selectHadithDetailsDomain = state => state.get('hadithDetails', initialState);

const makeSelectHadithDetails = () => createSelector(selectHadithDetailsDomain, substate => substate.toJS());

const makeSelectLoading = () => createSelector(selectHadithDetailsDomain, substate => substate.get('loading'));

const makeSelectError = () => createSelector(selectHadithDetailsDomain, substate => substate.get('error'));

const makeSelectHadith = () => createSelector(selectHadithDetailsDomain, substate => substate.get('hadith'));

export default makeSelectHadithDetails;
export { selectHadithDetailsDomain, makeSelectLoading, makeSelectError, makeSelectHadith };
