import { fromJS } from 'immutable';
import hadithListReducer from '../reducer';

describe('hadithListReducer', () => {
  it('returns the initial state', () => {
    expect(hadithListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
