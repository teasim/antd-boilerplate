import { createSelector } from "reselect";

export const selectLanguage = state => state.get("language");

export const selectLocaleLanguage = () =>
  createSelector(selectLanguage, language => language.get("locale"));
