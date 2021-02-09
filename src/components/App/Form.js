import React, { useState } from "react";

export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
}) {
  //gets the value on the input
  const inputTextHandler = (event) => {
    //update the state using setter function
    setInputText(event.target.value);
  };

  //submit the form
  const submitTextHandler = (event) => {
    //prevent browser refresh
    event.preventDefault();
    //grab all todos and create new object
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //reset the input field to empty
    setInputText("");
  };

  //get status of the todo
  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          value={inputText}
          onChange={inputTextHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTextHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
