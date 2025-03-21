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
import { authReducer } from './auth/slice';
import { profileReducer } from './profile/slice';
import { usersReducer } from './users/slice';
import { dialogsReducer } from './dialogs/slice';
import { messagesReducer } from './messages/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['access_token'],
};

type AuthPersistedState = ReturnType<typeof authReducer>;

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthPersistedState>(authPersistConfig, authReducer),
    profile: profileReducer,
    users: usersReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
