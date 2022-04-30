import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger/src';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default rootReducer => {
  const middleware = [];
  const enhancers = [];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  middleware.push(logger);
  middleware.push(thunk);
  enhancers.push(applyMiddleware(...middleware));

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, composeEnhancers(...enhancers));

  const persistor = persistStore(store);

  return {store, persistor};
};
