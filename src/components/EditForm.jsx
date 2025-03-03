import { useState } from "react";

function EditForm({ todo,editTodo }) {
  const [content, setContent] = useState(todo.content);
  const handleClick = (e) => {
    e.preventDefault();
    editTodo(todo.id,content);
  };
  return (
    <form className="createForm">
      <input
        type="text"
        placeholder="輸入代辦事項"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button type="submit" onClick={handleClick}>
        完成
      </button>
    </form>
  );
}

export default EditForm;
