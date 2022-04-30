import {ADD_CURRENCY, REMOVE_CURRENCY} from './types';

const currencies = (state = {}, action) => {
  switch (action.type) {
    case ADD_CURRENCY:
      return {
        ...state,
        ...action.data,
      };
    case REMOVE_CURRENCY:
      delete state[action.data.symbol];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default {currencies};
