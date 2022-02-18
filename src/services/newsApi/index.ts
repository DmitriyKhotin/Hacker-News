import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Id } from '../../store/slice/types';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hacker-news.firebaseio.com/v0/',
  }),
  endpoints: (builder) => ({
    getItemById: builder.query({
      query: (id: Id) => `item/${id}`,
    }),
    getNewestItems: builder.query({
      query: () => 'newstories',
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetItemByIdQuery, useGetNewestItemsQuery } = newsApi;
