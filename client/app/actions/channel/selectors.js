import { createSelector } from "reselect";

export const selectOidc = state => state.get("authorise");

export const makeSelectOidcUser = () =>
  createSelector(selectOidc, authorise => authorise.get("user"));