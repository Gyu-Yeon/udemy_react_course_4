import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import { useContext } from "react";
// import BooksContext from "../context/books";

function App() {
  // const num = useContext(BooksContext);
  const [books, setBooks] = useState([]);
  const [dataNum, setDataNum] = useState(0);

  const addBook = async (newBook) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: newBook,
    });

    const addedBook = [...books, response.data];
    setDataNum(dataNum + 1);
    setBooks(addedBook);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const deletedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deletedBook);
  };

  const editBook = async (editTitle, id) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: editTitle,
    });

    const editted = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } else return book;
    });
    setBooks(editted);
  };

  const getBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div className="app">
      <h1>Reading List </h1>
      <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
      <BookCreate addBook={addBook} />
    </div>
  );
}

export default App;
