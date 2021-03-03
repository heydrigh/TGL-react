import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import { fetchBetsSaga } from './sagas';

export function* watchBets() {
  yield takeEvery(actionTypes.FETCH_BET, fetchBetsSaga);
}
