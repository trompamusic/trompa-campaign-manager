import { putResolve, delay } from 'redux-saga/effects';
import * as startupActions from '../../redux/Startup/Startup.actions';

export function * startup () {
  yield delay(5000);

  yield putResolve(startupActions.startupSuccess());
}
