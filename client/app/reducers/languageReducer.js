import { fromJS } from "immutable";
import { DEFAULT_LOCALE, CHANGE_LOCALE } from "app/actions/locale/types";

const initialState = fromJS({
  locale: DEFAULT_LOCALE
});

function languageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set("locale", action.payload);
    default:
      return state;
  }
}

export default languageReducer;

