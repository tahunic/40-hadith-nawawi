import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the hadithList state domain
 */

const selectHadithListDomain = state => state.get('hadithList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HadithList
 */

const makeSelectHadithList = () => createSelector(selectHadithListDomain, substate => substate.toJS());

export default makeSelectHadithList;
export { selectHadithListDomain };
