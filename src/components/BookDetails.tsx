import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Book } from "../types";

type BookDetailsProps = {
  books: Book[];
};

const BookDetails: React.FC<BookDetailsProps> = ({ books }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === parseInt(id || "0"));

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{book.title}</h1>
        <h4 className="card-subtitle text-muted">by {book.author}</h4>
        <p className="card-text mt-3">{book.description}</p>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
