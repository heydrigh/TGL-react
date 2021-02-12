import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import { fetchedLotterySaga } from './sagas';

export function* watchLottery() {
  yield takeEvery(actionTypes.FETCH_LOTTERY, fetchedLotterySaga);
}
