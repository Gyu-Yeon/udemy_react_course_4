import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow(props) {
  const { book, deleteBook, editBook } = props;
  const [inputHider, setInputHider] = useState(0);

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const onChangeInputHider = () => {
    setInputHider(book.id);
  };

  return (
    <div className="book-show">
      {inputHider !== book.id ? (
        book.title
      ) : (
        <BookEdit
          book={book}
          editBook={editBook}
          setInputHider={setInputHider}
        />
      )}
      <div className="actions">
        <button className="edit" onClick={onChangeInputHider}></button>
        <button className="delete" onClick={handleDelete}></button>
      </div>
    </div>
  );
}

export default BookShow;
