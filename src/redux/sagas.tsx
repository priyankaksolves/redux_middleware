// src/redux/sagas.ts
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchBooksSuccess, fetchBooksFailure } from './bookSlice';
import { SagaIterator } from 'redux-saga';

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

// Type the action payload for better type safety
interface FetchBooksAction {
  type: string;
  payload: string;
}

// Specify return type of the generator function
function* fetchBooksSaga(action: FetchBooksAction): SagaIterator {
  try {
    const response = yield call(axios.get, GOOGLE_BOOKS_API, {
      params: { q: action.payload },
    });
    yield put(fetchBooksSuccess(response.data.items));
  } catch (error: unknown) {
    // Type narrowing for error
    if (error instanceof Error) {
      yield put(fetchBooksFailure(error.message));
    } else {
      // Handle non-Error cases
      yield put(fetchBooksFailure('An unknown error occurred'));
    }
  }
}

// Root Saga
export function* rootSaga(): SagaIterator {
  yield takeEvery('books/fetchBooksRequest', fetchBooksSaga);
}
