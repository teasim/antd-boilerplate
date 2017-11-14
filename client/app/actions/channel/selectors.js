import { createSelector } from "reselect";

export const selectOidc = state => state.get("oidc");

export const makeSelectOidcUser = () =>
  createSelector(selectOidc, oidc => oidc.get("user"));