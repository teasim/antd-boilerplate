import { fromJS } from "immutable";
import {
  CHANGE_USERNAME,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR
} from "app/actions/home/types";

const initialState = fromJS({
  username: "",
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false
  }
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set("username", action.name.replace(/@/gi, ""));
    case LOAD_REPOS:
      return state
        .set("loading", true)
        .set("error", false)
        .setIn(["userData", "repositories"], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(["userData", "repositories"], action.repos)
        .set("loading", false)
        .set("currentUser", action.username);
    case LOAD_REPOS_ERROR:
      return state.set("error", action.error).set("loading", false);
    default:
      return state;
  }
}

export default homeReducer;
