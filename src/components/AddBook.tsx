import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddBookProps } from "../types";


const AddBook: React.FC<AddBookProps> = ({ addBook }) => {
  const [title, setTitle] = useState<string>(""); // Explicitly type state as string
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author && description) {
      addBook({ title, author, description }); // Call the addBook function
      navigate("/"); // Redirect to the home page
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
