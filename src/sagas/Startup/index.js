import { takeLatest, all } from 'redux-saga/effects';
import * as StartupTypes from '../../redux/Startup/Startup.types';
import * as StartupSagas from './Startup.sagas';

export default function * () {
  return yield all([
    takeLatest(StartupTypes.STARTUP, StartupSagas.startup),
  ]);
}
