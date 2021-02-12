import * as actionTypes from './actionTypes';

export function loadTypes(url) {
  return {
    type: actionTypes.LOAD_LOTTERY_SAGA,
    payload: url
  };
}

export function isLoadingTypes() {
  return {
    type: actionTypes.FETCH_LOTTERY_LOADING
  };
}

export function fetchLotteryFail() {
  return {
    type: actionTypes.FETCH_LOTTERY_FAIL
  };
}
