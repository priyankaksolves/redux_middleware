import React from "react";
import BookList from "../components/BookList";
import { Book } from "../types";

type HomeProps = {
  books: Book[];
};

const Home: React.FC<HomeProps> = ({ books }) => {
  return (
    <div>
      <h1>Welcome to the Bookstore</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;
