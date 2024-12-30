// src/redux/thunk.ts
import { Dispatch } from 'redux';
import axios from 'axios';
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } from './bookSlice';

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooksThunk = (query: string) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(fetchBooksRequest()); // Dispatching request action

  try {
    const response = await axios.get(GOOGLE_BOOKS_API, {
      params: { q: query },
    });
    const books = response.data.items;
    dispatch(fetchBooksSuccess(books)); // Dispatching success action
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(fetchBooksFailure(error.message)); // Dispatching failure action
    } else {
      dispatch(fetchBooksFailure('An unknown error occurred'));
    }
  }
};
