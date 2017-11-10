import { combineReducers } from "redux-immutable";
import languageReducer from "./languageReducer";
import routeReducer from "./routeReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  route: routeReducer,
  language: languageReducer,
  home: homeReducer
});

export default rootReducer;
