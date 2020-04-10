import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/TodoList";
import "./App.css";

function App() {
  const [allTodos, setAll] = useState<string[]>([]);
  const addTodo = (todo: string) => {
    setAll([...allTodos, todo]);
  };
  return (
    <div>
      <Form onSubmit={addTodo} />
      <List todos={allTodos} />
    </div>
  );
}

export default App;
