import api from '../../../../services/api';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/actions';

export function* fetchedLotterySaga(action) {
  yield put(actions.fetchLotteryStart());

  try {
    const response = yield api.get('/types');
    const fetchedLottery = [];
    fetchedLottery.push({
      ...response.data
    });
    yield put(actions.fetchLotterySuccess(fetchedLottery));
  } catch (error) {
    yield put(actions.fetchLotteryFail(error));
  }
}
