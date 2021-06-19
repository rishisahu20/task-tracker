import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import taskDetailSlice from '../pages/Dashboard/dashboardSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  taskDetailSlice,
});

//persist store to persist data until user don't clear local storage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['taskDetailSlice'], //Things u want to persist
  blacklist: [], //Things u don't want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };
