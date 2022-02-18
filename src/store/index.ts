import { configureStore } from '@reduxjs/toolkit';

import { DEV_MODE } from '../../webpackUtils/MODE';

import newsReducer from './slice';

export const store = configureStore({
  reducer: newsReducer,
  devTools: DEV_MODE,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
