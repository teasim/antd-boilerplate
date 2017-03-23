
import { fromJS } from 'immutable';
import formAReducer from '../reducer';

describe('formAReducer', () => {
  it('returns the initial state', () => {
    expect(formAReducer(undefined, {})).toEqual(fromJS({}));
  });
});
