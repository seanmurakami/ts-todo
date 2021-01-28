import React from "react";
import { TodoItem } from "../interfaces";

const List = (props: any) => {
  return (
    <ul>
      {props.todos.map((todo: TodoItem) => {
        return (
          <li key={todo.id} className={`todo ${todo.isCompleted ? "complete" : ""}`} onClick={() => props.toggle(todo.id)}>
            {todo.text}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
