/* eslint-disable */
import { fromJS } from "immutable";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "app/reducers/index";
import rootSaga from "app/sagas/index";
import createOidcMiddleware from 'redux-oidc';
import userManager from "app/helpers/userManager";

export default function genStore(initialState = {}, baseHistory) {
  const loggingMiddleware = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const oidcMiddleware = createOidcMiddleware(userManager);

  const middlewares = [
    oidcMiddleware,
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
    rootReducer,
    fromJS(initialState),
    composeWithDevTools(...enhancers)
  );

  const history = baseHistory;
  
  sagaMiddleware.run(rootSaga);

  return { store, history };
}
