import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    console.log(newBook);
    // setBooks([...books, newBook]);
  };

  return (
    <div>
      <BookCreate addBook={addBook} />
    </div>
  );
}

export default App;
