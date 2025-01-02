import React from 'react';
import { useSelector } from 'react-redux';
import { BooksState } from '../redux/bookSlice';

const BookList: React.FC = () => {
  const books = useSelector((state: BooksState) => state.books); // Select the books from the Redux store

  if (books.length === 0) {
    return <div>No books found</div>;
  }

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.description}</p>
            <p><strong>Authors:</strong> {book.volumeInfo.authors.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
