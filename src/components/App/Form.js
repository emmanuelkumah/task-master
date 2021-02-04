import React, { useState } from "react";

export default function Form({ inputText, setInputText, todos, setTodos }) {
  //gets the value on the input
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };
  const submitTextHandler = (event) => {
    //prevent browser refresh
    event.preventDefault();
    //grab all todos and update the required keys
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //reset the input field to empty
    setInputText("");
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
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
