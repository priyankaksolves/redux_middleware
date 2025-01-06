import React from "react";
import { Link } from "react-router-dom";
import { Book } from "../types";

type BookListProps = {
  books: Book[];
};

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="row">
      {books.map((book) => (
        <div className="col-md-4" key={book.id}>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">by {book.author}</p>
              <Link to={`/book/${book.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
