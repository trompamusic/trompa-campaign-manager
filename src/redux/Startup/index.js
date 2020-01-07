import createReducer from '../createReducer';
import * as types from './Startup.types';
import * as reducers from './Startup.reducers';
import { INITIAL_STATE } from './Startup.state';

/* eslint-disable key-spacing */
export const reducer = createReducer(INITIAL_STATE, {
  [types.STARTUP]: reducers.startup,
  [types.STARTUP_SUCCESS]: reducers.startupSuccess,
});
