import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  types: {}
};

export const lottery = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOTTERY_REQUEST: {
      return {
        types: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
