import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { debugLog } from '../../utils/debugLog';
import { getItemById, getNewestItems } from '../api';

import { INews, INewsState } from './types';

const initialState: INewsState = {
  news: [],
  timer: {
    timerId: null,
    currentTime: 60,
  },
  currentNews: null,
  loading: false,
  error: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.timer.timerId = setInterval(() => {
        state.timer.currentTime = state.timer.currentTime - 1;
      }, 1000);
    },
  },
  extraReducers: {
    [getNewestItems.rejected.type]: (state, action: PayloadAction<string>) => {
      debugLog('getNewestItems rejected');
      state.loading = false;
      state.error = action.payload;
    },
    [getNewestItems.pending.type]: (state) => {
      debugLog('getNewestItems pending');
      state.loading = true;
      state.error = '';
    },
    [getNewestItems.fulfilled.type]: (
      state,
      action: PayloadAction<INews[]>
    ) => {
      debugLog('getNewestItems fulfilled');
      state.news = action.payload;
      state.loading = false;
    },

    [getItemById.rejected.type]: (state, action: PayloadAction<string>) => {
      debugLog('getItemById rejected');
      state.loading = false;
      state.error = action.payload;
    },
    [getItemById.pending.type]: (state) => {
      debugLog('getItemById pending');
      state.loading = true;
      state.error = '';
    },
    [getItemById.fulfilled.type]: (state, action: PayloadAction<INews>) => {
      debugLog('getItemById fulfilled');
      state.currentNews = action.payload;
      state.loading = false;
    },
  },
});

export default newsSlice.reducer;
