import { useState } from "react";

function BookCreate(props) {
  const { addBook } = props;
  const [inputValue, setInputValue] = useState("");

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addBook(inputValue);
    setInputValue("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="">
          <input
            className="input"
            type="text"
            onChange={onChangeInputValue}
            value={inputValue}
          />
        </label>
        <button className="button">Add book</button>
      </form>
    </div>
  );
}

export default BookCreate;
