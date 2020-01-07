import { all } from 'redux-saga/effects';
import startupSagas from './Startup';

export default function * root() {
  yield all([
    startupSagas(),
  ]);
}
