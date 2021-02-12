import * as actionTypes from './actionTypes';

export const fetchLotteryStart = () => {
  return {
    type: actionTypes.FETCH_LOTTERY_START
  };
};

export const fetchLotterySuccess = (lottery) => {
  return {
    type: actionTypes.FETCH_LOTTERY_SUCCESS,
    lottery: lottery
  };
};

export const fetchLotteryFail = (error) => {
  return {
    type: actionTypes.FETCH_LOTTERY_FAIL,
    error: error
  };
};

export const fecthLottery = () => {
  return {
    type: actionTypes.FETCH_LOTTERY
  };
};
