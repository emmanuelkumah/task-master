import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              text={todo.text}
              todo={todo} //pass each todo object as props
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
