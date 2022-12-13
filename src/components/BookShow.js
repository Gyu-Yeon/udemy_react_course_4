function BookShow(props) {
  const { book, deleteBook } = props;
  return (
    <div className="book-show">
      {book.title}
      <div>
        <button>Edit</button>
      </div>
      <div>
        <button onClick={() => deleteBook(book.id)}>X</button>
      </div>
    </div>
  );
}

export default BookShow;
