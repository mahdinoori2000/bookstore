import { configureStore } from '@reduxjs/toolkit';
import catagoriesReducer from './catagories/catagoriesSlice';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    catagories: catagoriesReducer,
  },
});

export default store;
