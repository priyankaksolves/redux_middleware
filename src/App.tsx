import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import { Book } from "./types";
import AddBook from "./components/AddBook";
import Search from "./components/Search";

const App = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "Book One", author: "Author One", description: "This is the first book." },
    { id: 2, title: "Book Two", author: "Author Two", description: "This is the second book." },
    { id: 3, title: "Book Three", author: "Author Three", description: "This is the third book." },
    { id: 4, title: "Book Four", author: "Author Four", description: "This is the four book." },
    { id: 5, title: "Book Five", author: "Author Five", description: "This is the fifth book." },

  ]);

  const addBook = (newBook: Omit<Book, "id">) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/redux_middleware" element={<Home books={books} />} />
          <Route path="/add-book" element={<AddBook addBook={addBook} />} />
          <Route path="/book-search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<BookDetails books={books} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
