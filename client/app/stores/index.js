/* eslint-disable */
import { fromJS } from "immutable";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import createReducer from "app/reducers/index";

export default function generateStore(initialState = {}, baseHistory) {
  const loggingMiddleware = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(baseHistory),
    loggingMiddleware
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  /* eslint-disable no-underscore-dangle */
  const composeWithDevTools =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeWithDevTools(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;

  const history = baseHistory;

  return { store, history };
}
