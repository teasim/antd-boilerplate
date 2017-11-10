import { createSelector } from "reselect";

const selectHome = state => state.get("home");

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get("username"));

const makeSelectCurrentUser = () =>
  createSelector(selectHome, globalState => globalState.get("currentUser"));

const makeSelectLoading = () =>
  createSelector(selectHome, globalState => globalState.get("loading"));

const makeSelectError = () =>
  createSelector(selectHome, globalState => globalState.get("error"));

const makeSelectRepos = () =>
  createSelector(selectHome, globalState =>
    globalState.getIn(["userData", "repositories"])
  );

const selectRoute = state => state.get("route");

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get("location").toJS());

export {
  selectHome,
  makeSelectUsername,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation
};
