import { configureStore } from '@reduxjs/toolkit';
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
import { eventsReducer } from './events/eventsSlice';
import { filterReducer } from './filter/filterSlice';
import { paginationReducer } from './pagination/pagination';

const eventPersistConfig = {
  key: 'events',
  storage,
};

const pagePersistConfig = {
  key: 'page',
  storage,
};

export const store = configureStore({
  reducer: {
    events: persistReducer(eventPersistConfig, eventsReducer),
    filter: filterReducer,
    page: persistReducer(pagePersistConfig, paginationReducer),
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
