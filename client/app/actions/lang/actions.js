import { CHANGE_LOCALE } from "./types";

export function changeLocaleLanguage(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    payload: languageLocale
  };
}
