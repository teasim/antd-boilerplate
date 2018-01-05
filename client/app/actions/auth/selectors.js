import { createSelector } from "reselect";

export const selectAuth = state => state.get("auth");

export const makeSelectAuthUser = () =>
  createSelector(selectAuth, auth => auth.get("user"));

export const makeSelectAuthLoading = () =>
  createSelector(selectAuth, auth => auth.get("isLoadingUser"));
