import { combineReducers } from "redux-immutable";
import { immutableReducer as oidcReducer } from 'redux-oidc';
import languageReducer from "./languageReducer";
import routeReducer from "./routeReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  route: routeReducer,
  language: languageReducer,
  oidc: oidcReducer,
  home: homeReducer
});

export default rootReducer;
