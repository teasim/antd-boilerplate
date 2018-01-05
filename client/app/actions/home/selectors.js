import { createSelector } from "reselect";

export const selectHome = state => state.get("home");

export const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get("username"));

export const makeSelectCurrentUser = () =>
  createSelector(selectHome, globalState => globalState.get("currentUser"));

export const makeSelectLoading = () =>
  createSelector(selectHome, globalState => globalState.get("loading"));

export const makeSelectError = () =>
  createSelector(selectHome, globalState => globalState.get("error"));

export const makeSelectRepos = () =>
  createSelector(selectHome, globalState =>
    globalState.getIn(["userData", "repositories"])
  );
