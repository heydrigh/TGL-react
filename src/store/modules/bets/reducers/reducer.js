import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../utility';

const initialState = {
  bets: [],
  loading: true,
  error: false
};

const saveBet = (state, action) => {
  const updatedState = {
    bets: action.bets.concat(state.bets)
  };
  return updateObject(state, updatedState);
};

const fetchBetStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchBetFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchBetFinished = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchBets = (state, action) => {
  return updateObject(state, {
    bets: action.bets
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_BET_SUCCESS:
      return saveBet(state, action);
    case actionTypes.FETCH_BET_START:
      return fetchBetStart(state, action);
    case actionTypes.FETCH_BET_FAIL:
      return fetchBetFail(state, action);
    case actionTypes.FETCH_BET_SUCCESS:
      return fetchBets(state, action);
    default:
      return state;
  }
};

export default reducer;
