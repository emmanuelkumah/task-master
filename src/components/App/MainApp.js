import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./Styles.css";
import ToDoList from "./ToDoList";

function MainApp() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    //run the filterHanlder function
    filterHandler();
  }, [todos, status]);

  //filter the todos depending on the status
  const filterHandler = () => {
    switch (status) {
      case "completed":
        //create an array with the filtered todos
        setFilteredTodos(todos.filter((todo) => todo.completed === true));

        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div>
      <header>To Do App</header>
      <main>
        <Form
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          status={status}
          setStatus={setStatus}
        />
        <ToDoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </main>
    </div>
  );
}

export default MainApp;
