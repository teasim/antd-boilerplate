import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { fetchMiddleware } from 'teasim-middlewares';
import { rootReducer } from 'app/reducers/index';
import thunkMiddleware from 'redux-thunk';

export default function generateStore(baseHistory, initialState) {
  const routingMiddleware = routerMiddleware(baseHistory);

  const middlewares = applyMiddleware(
    thunkMiddleware,
    fetchMiddleware,
    routingMiddleware,
  );

  const store = createStore(
    rootReducer,
    initialState,
    middlewares,
  );

  const history = syncHistoryWithStore(baseHistory, store);

  return { store, history };
};
