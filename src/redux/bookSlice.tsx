// src/redux/bookSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
  volumeInfo: VolumeInfo;
  id: string;
  title: string;
  authors: string[];
  description: string;
}

export interface VolumeInfo {
    authors: string[];
    description: string;
    title: string;
    publisher: string;
}


interface BooksState {
  loading: boolean;
  books: Book[];
  error: string | null;
}

const initialState: BooksState = {
  loading: false,
  books: [],
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksRequest: (state) => {
      state.loading = true;
    },
    fetchBooksSuccess: (state, action: PayloadAction<Book[]>) => {
      state.loading = false;
      state.books = action.payload;
    },
    fetchBooksFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } = booksSlice.actions;
export default booksSlice.reducer;
