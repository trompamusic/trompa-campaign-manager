import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import rootSaga from '../sagas';
import { history } from '../history';
import configureStore from './configureStore';

/* eslint-disable key-spacing */
const rootReducer = combineReducers({
  router: connectRouter(history),
  startup: require('./Startup').reducer,
});

const store = configureStore(rootReducer, rootSaga);

export default store;
