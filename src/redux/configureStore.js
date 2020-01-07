import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { history } from '../history';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers  = [];

  /* ------------- Router Middleware ------------- */

  // Build the middleware for intercepting and dispatching navigation actions
  middleware.push(routerMiddleware(history));

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  /* ------------- Assemble Middleware ------------- */

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  // kick off root saga
  sagaMiddleware.run(rootSaga);

  return store;
};
