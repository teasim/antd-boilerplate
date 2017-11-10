import { combineReducers } from "redux-immutable";
import languageReducer from "./languageReducer";
import routeReducer from "./routeReducer";

export default function createReducer() {
  return combineReducers({
    route: routeReducer,
    language: languageReducer
  });
}
