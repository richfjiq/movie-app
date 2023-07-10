import { Result } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './actions';

export interface MoviesState {
  loading: boolean;
  error: string | null;
  popular: Result[];
  upcoming: Result[];
  top_rated: Result[];
}

const initialState: MoviesState = {
  loading: false,
  error: null,
  popular: [],
  upcoming: [],
  top_rated: [],
};

const moviesStore = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state[payload.category] = [...state[payload.category], ...payload.movies];
      state.loading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
  },
});

export default moviesStore.reducer;
