import * as actionTypes from './actionTypes';

export const saveBetStart = () => {
  return {
    type: actionTypes.SAVE_BET_START
  };
};

export const saveBetSuccess = (bets) => {
  return {
    type: actionTypes.SAVE_BET_SUCCESS,
    bets: bets
  };
};

export const saveBetFail = (error) => {
  return {
    type: actionTypes.SAVE_BET_FAIL,
    error: error
  };
};

export const fetchBetStart = (token) => {
  return {
    type: actionTypes.FETCH_BET_START,
    token
  };
};

export const fetchBetSuccess = (bets) => {
  return {
    type: actionTypes.FETCH_BET_SUCCESS,
    bets: bets,
    loading: false
  };
};

export const fetchBetFail = (error) => {
  return {
    type: actionTypes.FETCH_BET_FAIL,
    error: error
  };
};

export const fecthBet = () => {
  return {
    type: actionTypes.FETCH_BET
  };
};
