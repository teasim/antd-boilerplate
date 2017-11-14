import { combineReducers } from "redux-immutable";
import { immutableReducer as authReducer } from 'redux-oidc';
import languageReducer from "./languageReducer";
import routeReducer from "./routeReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  routing: routeReducer,
  language: languageReducer,
  authorise: authReducer,
  home: homeReducer
});

export default rootReducer;
