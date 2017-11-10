import { CHANGE_LOCALE } from "./types";

export function changeLocaleLanguage(language) {
  return {
    type: CHANGE_LOCALE,
    payload: language
  };
}
