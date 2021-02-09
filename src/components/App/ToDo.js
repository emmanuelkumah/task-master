import React from "react";

function ToDo({ text, todos, todo, setTodos }) {
  //delete a todo
  const deleteToDoHandler = () => {
    //filter out the todos that meet the condition and update the todos
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  //mark todo as completed
  const completeToDoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            //grab the item from the array and set completed: true
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item  ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeToDoHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteToDoHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDo;
