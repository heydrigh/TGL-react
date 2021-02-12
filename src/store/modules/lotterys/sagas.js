import api from '../../../services/api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

function* loadAllTypes(action) {
  try {
    const response = yield call(api.get, action.payload);

    yield put({
      type: actionTypes.FETCH_LOTTERY_REQUEST,
      payload: response.data
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* typesSendAll() {
  yield all([takeLatest(actionTypes.LOAD_LOTTERY_SAGA, loadAllTypes)]);
}
