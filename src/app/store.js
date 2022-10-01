import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from 'features/movie/movieSlice'
import userSlice from 'features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    movie: moviesReducer,
  },
});
