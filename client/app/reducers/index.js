import { combineReducers } from "redux-immutable";
import languageReducer from "./languageReducer";
import routeReducer from "./routeReducer";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  route: routeReducer,
  language: languageReducer,
  auth: authReducer,
  home: homeReducer
});

export default rootReducer;
