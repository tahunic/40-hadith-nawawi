import { fromJS } from 'immutable';
import hadithDetailsReducer from '../reducer';

describe('hadithDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(hadithDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
