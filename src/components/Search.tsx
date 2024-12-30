// src/components/Search.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchBooksThunk } from '../redux/thunk';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchBooksThunk(query)); // Dispatching the thunk action
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
