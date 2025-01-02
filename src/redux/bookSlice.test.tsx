import booksReducer, {
    fetchBooksRequest,
    fetchBooksSuccess,
    fetchBooksFailure,
    Book,
    BooksState,
  } from './bookSlice';
  
  describe('booksSlice', () => {
    const initialState: BooksState = {
      loading: false,
      books: [],
      error: null,
    };
  
    it('should handle initial state', () => {
      expect(booksReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
    });
  
    it('should handle fetchBooksRequest', () => {
      const action = fetchBooksRequest();
      const expectedState = {
        ...initialState,
        loading: true,
      };
      expect(booksReducer(initialState, action)).toEqual(expectedState);
    });
  
    it('should handle fetchBooksSuccess', () => {
      const books: Book[] = [
        {
          id: '1',
          volumeInfo: {
            title: 'Book Title 1',
            authors: ['Author 1'],
            description: 'Description 1',
            publisher: 'Publisher 1',
          },
          title: 'Book Title 1',
          authors: ['Author 1'],
          description: 'Description 1',
        },
        {
          id: '2',
          volumeInfo: {
            title: 'Book Title 2',
            authors: ['Author 2'],
            description: 'Description 2',
            publisher: 'Publisher 2',
          },
          title: 'Book Title 2',
          authors: ['Author 2'],
          description: 'Description 2',
        },
      ];
      const action = fetchBooksSuccess(books);
      const expectedState = {
        ...initialState,
        loading: false,
        books,
      };
      expect(booksReducer(initialState, action)).toEqual(expectedState);
    });
  
    it('should handle fetchBooksFailure', () => {
      const errorMessage = 'Failed to fetch books';
      const action = fetchBooksFailure(errorMessage);
      const expectedState = {
        ...initialState,
        loading: false,
        error: errorMessage,
      };
      expect(booksReducer(initialState, action)).toEqual(expectedState);
    });
  });
  