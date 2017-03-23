import { createSelector } from 'reselect';

/**
 * Direct selector to the formB state domain
 */
const selectFormBDomain = () => (state) => state.get('formB');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FormB
 */

const makeSelectFormB = () => createSelector(
  selectFormBDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFormB;
export {
  selectFormBDomain,
};
