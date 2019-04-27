import { changeTerm } from '../actions';
import { CHANGE_TERM } from '../constants';

describe('Search actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CHANGE_TERM,
      };
      expect(changeTerm()).toEqual(expected);
    });
  });
});
