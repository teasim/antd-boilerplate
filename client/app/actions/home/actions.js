import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  CHANGE_USERNAME
} from "./types";

export function loadRepos() {
  return {
    type: LOAD_REPOS
  };
}

export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  };
}

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
}
