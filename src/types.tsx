export type Book = {
    id?: number;
    title: string;
    author: string;
    description: string;
  };
  
export type ComponentProps = {
    books: Book[];
  };

export type AddBookProps = {
    addBook: (newBook: Book) => void; // Function to add a new book
  };