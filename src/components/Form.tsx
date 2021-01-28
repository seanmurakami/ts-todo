import React, { SyntheticEvent } from "react";
import useInputValue from "../hooks/useInputValue";
import { TodoItem } from "../interfaces";

const Form = (props: any) => {
  const { resetValue, ...text } = useInputValue("");
  const { count, onSubmit } = props;
  const addTodo = (e: SyntheticEvent) => {
    e.preventDefault();
    const todo: TodoItem = {
      id: count,
      text: text.value,
      isCompleted: false
    };
    onSubmit(todo);
    resetValue();
  };
  return (
    <form onSubmit={addTodo}>
      <input {...text} type="text" />
    </form>
  );
};

export default Form;
