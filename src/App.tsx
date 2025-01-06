import React from 'react';
import Search from './components/Search';
import BookList from './components/BookList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './components/about';

const App: React.FC = () => {
  return (
 <>
    <div>
      <h1>Google Book Store</h1>
      <Search />
      <BookList />

    </div>
    <div>
          <BrowserRouter>
          <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
    </div></>

  );
};

export default App;
