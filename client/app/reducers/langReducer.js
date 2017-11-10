import merge from "teasim-assists/merge";
import { DEFAULT_LOCALE, CHANGE_LOCALE } from "app/actions/lang/types";

const initialState = {
  locale: DEFAULT_LOCALE
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return merge({}, state, { locale: action.payload });
    default:
      return state;
  }
};

export default langReducer;
