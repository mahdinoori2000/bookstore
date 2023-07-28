import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      prepare(id, title, author) {
        return { payload: { id, title, author } };
      },
      reducer(state, action) {
        state.books.push({
          item_id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
          catagory: '',
        });
      },
    },
    removeBook: (state, action) => (
      {
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
      }
    ),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
