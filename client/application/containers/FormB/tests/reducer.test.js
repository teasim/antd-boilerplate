
import { fromJS } from 'immutable';
import formBReducer from '../reducer';

describe('formBReducer', () => {
  it('returns the initial state', () => {
    expect(formBReducer(undefined, {})).toEqual(fromJS({}));
  });
});
