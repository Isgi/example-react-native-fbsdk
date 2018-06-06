import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native

import appReducer from './reducers';
import { middlewares } from './middlewares';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings']
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

const persistor = persistStore(store);

export {
  store,
  persistor
}
