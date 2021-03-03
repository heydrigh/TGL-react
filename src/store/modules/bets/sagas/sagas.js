import api from '../../../../services/api';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/actions';

export function* fetchBetsSaga(action) {
  yield put(actions.fetchBetStart());

  try {
    const response = yield api.get('/games');

    const fetchedGames = [];
    fetchedGames.push({
      ...response.data
    });
    yield put(actions.fetchBetSuccess(fetchedGames));
  } catch (error) {
    yield put(actions.fetchBetFail(error));
  }
}
