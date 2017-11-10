import { fork } from "redux-saga/effects";
import { loginFlow, logoutFlow, registerFlow } from "./authSaga";
import githubData from "./homeSaga";

export default function* rootSaga() {
  yield [
    fork(loginFlow),
    fork(logoutFlow),
    fork(registerFlow),
    fork(githubData)
  ];
}
