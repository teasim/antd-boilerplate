import { call, put, select, takeLatest } from "redux-saga/effects";
import request from "app/helpers/request";
import { LOAD_REPOS } from "app/actions/home/types";
import {
  reposLoaded,
  repoLoadingError,
  makeSelectUsername
} from "app/actions/home/index";

export function* getRepos() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
}
