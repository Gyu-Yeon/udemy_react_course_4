import BookShow from "./BookShow";
function BookList(props) {
  const { books, deleteBook } = props;
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <BookShow book={book} deleteBook={deleteBook} />
          </div>
        );
      })}
    </div>
  );
}

export default BookList;
