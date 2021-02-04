import React, { useState } from "react";
import Form from "./Form";
import "./Styles.css";
import ToDoList from "./ToDoList";

function MainApp() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header>To Do App</header>
      <main>
        <Form
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
        />
        <ToDoList todos={todos} />
      </main>
    </div>
  );
}

export default MainApp;
