import React from 'react';
import Search from './components/Search';
import BookList from './components/BookList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Google Book Store</h1>
      <Search />
      <BookList />
    </div>
  );
};

export default App;
