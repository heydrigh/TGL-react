import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../utility';

const initialState = {
  bets: [],
  loading: false
};

const saveBet = (state, action) => {
  const updatedState = {
    bets: action.bets
  };
  return updateObject(state, updatedState);
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
    case actionTypes.FETCH_BET_SUCCESS:
      return fetchBets(state, action);
    default:
      return state;
  }
};

export default reducer;
