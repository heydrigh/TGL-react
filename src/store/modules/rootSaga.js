import { all } from 'redux-saga/effects';

import lottery from './lotterys/sagas';

export default function* rootSaga() {
  return yield all([lottery]);
}
