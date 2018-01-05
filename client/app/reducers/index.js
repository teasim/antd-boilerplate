import { combineReducers } from "redux-immutable";
import { immutableReducer as authReducer } from "teasim-plugin-authman";
import languageReducer from "./languageReducer";
import routeReducer from "./routeReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  language: languageReducer,
  home: homeReducer
});

export default rootReducer;
