// src/components/Search.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchBooksThunk } from '../redux/thunk';
import { Book } from '../redux/bookSlice';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchBooksThunk(query)); // Dispatching the thunk action
    }
  };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const books = useSelector((state: any) => {
      return state.books?.books;
    });
  
    if (books?.length === 0) {
      return <div className="noBooks">No books found</div>; // Display when there are no books
    }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      <button onClick={handleSearch}>Search by text</button>

      <h2>Books List</h2>
      <ul>
        {books.map((book: Book) => (
          <li key={book?.id}>
            <h3>{book?.volumeInfo?.title}</h3>
            <p>{book?.volumeInfo?.description}</p>
            <p>
              <strong>Authors:</strong> {book?.volumeInfo?.authors?.join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
