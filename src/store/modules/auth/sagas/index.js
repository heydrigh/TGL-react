import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import { authSagas } from './sagas';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_REQUEST, authSagas);
}
