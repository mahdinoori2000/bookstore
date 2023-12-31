import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NMdtmp7Xf82moZUrly0Y/books';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const getData = (data) => data.map(([id, [book]]) => {
  const { author, title, category } = book;
  return {
    item_id: id,
    title,
    author,
    category,
  };
});

// Fetch book from API
export const fetchBooks = createAsyncThunk('books/fetchbooks', async () => {
  try {
    const response = await axios.get(apiUrl);
    const { data } = response;
    return getData(Object.entries(data));
  } catch (error) {
    throw Error(error);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => ({
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
        loading: false,
        error: action.error.message,
      }));
  },
});

// Add book to the api
export const addBook = createAsyncThunk('books/addBook', async ({ id, title, author }) => {
  const response = await axios.post(apiUrl, {
    item_id: id,
    title,
    author,
    category: 'none',
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  window.location.reload();
  return response.data;
});

// Remove book from api in specific id
export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NMdtmp7Xf82moZUrly0Y/books/${id}`);
  window.location.reload();
});
export default booksSlice.reducer;
