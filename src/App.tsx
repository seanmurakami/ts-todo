import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoItem } from "./interfaces";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [count, setCount] = useState(0);
  const addTodo = (todo: TodoItem): void => {
    setTodos([...todos, todo]);
    setCount(count + 1);
  };
  const toggleCompleted = (id: number) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo;
    });
    setTodos(newTodos);
  };
  return (
    <div>
      <Form count={count} onSubmit={addTodo} />
      <TodoList todos={todos} toggle={toggleCompleted} />
    </div>
  );
}

export default App;
