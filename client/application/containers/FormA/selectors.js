import { createSelector } from 'reselect';

/**
 * Direct selector to the formA state domain
 */
const selectFormADomain = () => (state) => state.get('formA');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FormA
 */

const makeSelectFormA = () => createSelector(
  selectFormADomain(),
  (substate) => substate.toJS()
);

export default makeSelectFormA;
export {
  selectFormADomain,
};
