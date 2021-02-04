import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return <ToDo key={todo.id} todo={todo.text} />;
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
