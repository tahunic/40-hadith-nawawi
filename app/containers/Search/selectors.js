import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the search state domain
 */

const selectSearchDomain = state => state.get('search', initialState);

const makeSelectSearch = () => createSelector(selectSearchDomain, substate => substate.toJS());

const makeSelectTerm = () => createSelector(selectSearchDomain, substate => substate.get('term'));

export default makeSelectSearch;
export { selectSearchDomain, makeSelectTerm };
