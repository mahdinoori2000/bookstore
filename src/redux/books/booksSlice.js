import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books += [action.payload];
    },
    removeBook(state, action) {
      state.books -= action.payload;
    },
  },
});

export const { addBook, removeBook } = booksSlice.reducer;
export default booksSlice.reducer;
