import { call, put } from 'redux-saga/effects';
import api from '../../../../services/api';
import * as actions from '../actions/actions';

export function* authSagas({ payload }) {
  try {
    const response = yield call(api.post, 'sessions', payload);

    api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.token.token}`;

    yield put(actions.authSuccess(response.data.token, response.data.user));
  } catch (err) {
    console.log(err);
    yield put(actions.authFail(err));
  }
}
