import { createSelector } from "reselect";

export const selectRoute = state => state.get("route");

export const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get("location").toJS());
