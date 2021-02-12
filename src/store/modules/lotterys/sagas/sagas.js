import api from '../../../../services/api';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/actions';

export function* fetchedLotterySaga(action) {
  yield put(actions.fetchLotteryStart());

  try {
    const response = yield api.get('/types');
    const fetchedLottery = [];
    for (let key in response.data) {
      fetchedLottery.push({
        ...response.data,
        id: key
      });
    }
    yield put(actions.fetchLotterySuccess(fetchedLottery));
  } catch (error) {
    yield put(actions.fetchLotteryFail(error));
  }
}
