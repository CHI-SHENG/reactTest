import { useState } from "react";
function CreateForm({ addTodo }) {
  const [content, setContent] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
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
        加入
      </button>
    </form>
  );
}

export default CreateForm;
