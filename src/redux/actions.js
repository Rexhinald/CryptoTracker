import {ADD_CURRENCY, REMOVE_CURRENCY} from './types';

export const addCryptoCurrency = data => ({
  type: ADD_CURRENCY,
  data,
});

export const removeCryptoCurrency = symbol => ({
  type: REMOVE_CURRENCY,
  data: {symbol},
});

export default {addCryptoCurrency, removeCryptoCurrency};
