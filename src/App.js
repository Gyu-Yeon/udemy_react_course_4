import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [dataNum, setDataNum] = useState(0);

  const addBook = (newBook) => {
    const addedBook = [...books, { id: dataNum + 1, title: newBook }];
    setDataNum(dataNum + 1);
    setBooks(addedBook);
  };

  const deleteBook = (id) => {
    const deletedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deletedBook);
  };

  const editBook = (editTitle, id) => {
    const editted = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: editTitle };
      } else return book;
    });
    setBooks(editted);
  };

  return (
    <div className="app">
      <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
      <BookCreate addBook={addBook} />
    </div>
  );
}

export default App;
