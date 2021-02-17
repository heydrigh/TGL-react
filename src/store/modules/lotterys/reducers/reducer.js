import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../utility';

const INITIAL_STATE = {
  lottery: [],
  loading: true
};

const fetchLotteryStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchLotterySuccess = (state, action) => {
  return updateObject(state, {
    lottery: action.lottery,
    loading: false
  });
};

const fetchLotteryFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOTTERY_START:
      return fetchLotteryStart(state, action);
    case actionTypes.FETCH_LOTTERY_SUCCESS:
      return fetchLotterySuccess(state, action);
    case actionTypes.FETCH_LOTTERY_FAIL:
      return fetchLotteryFail(state, action);
    default:
      return state;
  }
};

export default reducer;
