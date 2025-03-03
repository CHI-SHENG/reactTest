import CreateForm from "./createForm";
import ToDo from "./ToDo";
import { useState } from "react";
function ToDoWrapper() {
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: 1, isCompleted: true, isEditing: false },
    { content: "洗衣服", id: 2, isCompleted: false, isEditing: false },
  ]);
  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random() }]);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id == id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };
  const toggleEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id == id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id == id
          ? {
              ...todo,
              content: newContent,
              isEditing: false,
            }
          : todo;
      })
    );
  };
  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo}></CreateForm>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            toggleEditing={toggleEditing}
            editTodo={editTodo}
          ></ToDo>
        );
      })}
    </div>
  );
}
export default ToDoWrapper;
