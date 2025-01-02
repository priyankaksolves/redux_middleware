import React from 'react';
import { useSelector } from 'react-redux';
import { Book } from '../redux/bookSlice';
import './BookList.module.css';  // Make sure the CSS file is correctly imported

const BookList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const books = useSelector((state: any) => {
    console.log(state); // This is a side effect (it prints the state, but doesn't return anything)
    return state.books?.books; // This is an expression that doesn’t do anything; it’s not returning anything
  });

  if (books.length === 0) {
    return <div className="noBooks">No books found</div>; // Display when there are no books
  }

  return (
    <div className="container">
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

export default BookList;
