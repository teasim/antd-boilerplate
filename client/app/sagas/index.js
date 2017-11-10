import { fork } from "redux-saga/effects";
import githubData from "./homeSaga";

export default function* rootSaga() {
  yield [fork(githubData)];
}
