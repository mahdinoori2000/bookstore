import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

// const uniqueId = 'NMdtmp7Xf82moZUrly0Y';
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NMdtmp7Xf82moZUrly0Y/books/';

const fetchBooks = createAsyncThunk('books/fetchbooks', async () => {
  const response = await axios.get(apiUrl);
  const data = response;
  return ('data', data);
});
console.log(fetchBooks());
const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        books: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }))
  },

});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;



// reducers: {
//   addBook: {
//     prepare(id, title, author) {
//       return { payload: { id, title, author } };
//     },
//     reducer(state, action) {
//       state.books.push({
//         item_id: action.payload.id,
//         title: action.payload.title,
//         author: action.payload.author,
//         catagory: '',
//       });
//     },
//   },
//   removeBook: (state, action) => (
//     {
//       ...state,
//       books: state.books.filter((book) => book.item_id !== action.payload),
//     }
//   ),
// },