import { Movies } from '@/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '../movies/actions';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (category: Category) => `/movie/${category}?api_key=${API_KEY}`,
      transformResponse: (response: Movies) => {
        console.log('response ++++++++++', response.results);
        return {
          data: response.results,
        };
      },
      async onQueryStarted(category, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
