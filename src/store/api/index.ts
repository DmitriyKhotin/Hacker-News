import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Id, INews } from '../slice/types';

import { apiUrls } from './apiUrls';

export const getNewestItems = createAsyncThunk(
  'news/getNewestItems',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<Id[]>(apiUrls.item.newestItems());
      const newsRequests = response.data
        .slice(0, 100)
        .map((id) => axios.get<INews>(apiUrls.item.itemById(id)));

      const news = await Promise.all(newsRequests);
      return news
        .map((response) => response.data)
        .filter((value) => value !== null);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message());
    }
  }
);

export const getItemById = createAsyncThunk(
  'news/getItemById',
  async (id: Id, thunkApi) => {
    try {
      const response = await axios.get<INews>(apiUrls.item.itemById(id));
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message());
    }
  }
);
