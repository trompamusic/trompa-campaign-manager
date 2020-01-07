import * as types from './Startup.types';

export const startup = () => ({ type: types.STARTUP });

export const startupSuccess = () => ({ type: types.STARTUP_SUCCESS });
