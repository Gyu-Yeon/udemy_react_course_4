import BookShow from "./BookShow";
function BookList(props) {
  const { books, deleteBook, editBook } = props;

  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <BookShow book={book} deleteBook={deleteBook} editBook={editBook} />
          </div>
        );
      })}
    </div>
  );
}

export default BookList;
