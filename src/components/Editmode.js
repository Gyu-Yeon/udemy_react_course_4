import { useState } from "react";

const EditMode = (props) => {
  const { book, editBook, setInputHider } = props;

  const [input, setInput] = useState(book.title);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const saveEdit = () => {
    editBook(input, book.id);
    setInputHider(0);
  };

  return (
    <div>
      <input value={input} onChange={(e) => onChangeInput(e)} />
      <button onClick={saveEdit}>save</button>
    </div>
  );
};

export default EditMode;
