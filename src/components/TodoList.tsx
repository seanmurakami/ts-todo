import React from "react";
import { TodoItem } from "../interfaces";

const List = (props: any) => {
  return (
    <div>
      {props.todos.map((todo: TodoItem) => {
        return (
          <div
            key={todo.id}
            style={todo.isCompleted ? { textDecoration: "line-through" } : {}}
            onClick={() => props.toggle(todo.id)}
          >
            {todo.text}
          </div>
        );
      })}
    </div>
  );
};

export default List;
