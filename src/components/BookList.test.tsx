import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import BookList from './BookList';
import { BooksState } from '../redux/bookSlice';

// Corrected mockBooksState with safe defaults
const mockBooksState: BooksState = {
  loading: false,
  books: [
    {
      id: '1',
      volumeInfo: {
        title: 'Book Title 1',
        description: 'Book description 1',
        authors: ['Author 1'],
        publisher: 'Publisher 1',
      },
      title: 'Book Title 1',
      authors: ['Author 1'],
      description: 'Book description 1',
    },
    {
      id: '2',
      volumeInfo: {
        title: 'Book Title 2',
        description: 'Book description 2',
        authors: ['Author 2', 'Author 3'],
        publisher: 'Publisher 2',
      },
      title: 'Book Title 2',
      authors: ['Author 2', 'Author 3'],
      description: 'Book description 2',
    },
  ],
  error: null,
};

const createMockStore = (initialState: BooksState) => {
  return configureStore({
    reducer: {
      books: (state = initialState.books) => state,
    },
  });
};

describe('BookList Component', () => {
  it('displays the message "No books found" when there are no books', () => {
    const emptyStore = createMockStore({
      loading: false,
      books: [], // Empty array to simulate no books
      error: null,
    });

    render(
      <Provider store={emptyStore}>
        <BookList />
      </Provider>
    );

    const noBooksMessage = screen.queryByText(/no books found/i);
    expect(noBooksMessage).toBeTruthy();
  });

  it('displays a list of books when books are available', () => {
    const populatedStore = createMockStore(mockBooksState);

    render(
      <Provider store={populatedStore}>
        <BookList />
      </Provider>
    );

    const bookTitle1 = screen.queryByText(/Book Title 1/);
    const bookTitle2 = screen.queryByText(/Book Title 2/);
    expect(bookTitle1).toBeTruthy();
    expect(bookTitle2).toBeTruthy();

    const authors1 = screen.queryByText(/Author 1/);
    const authors2 = screen.queryByText(/Author 2, Author 3/);
    expect(authors1).toBeTruthy();
    expect(authors2).toBeTruthy();

    const description1 = screen.queryByText(/Book description 1/);
    const description2 = screen.queryByText(/Book description 2/);
    expect(description1).toBeTruthy();
    expect(description2).toBeTruthy();
  });
});
