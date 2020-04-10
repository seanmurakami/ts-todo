import React, { SyntheticEvent } from "react";
import useInputValue from "../hooks/useInputValue";

const Form = (props: any) => {
  const { resetValue, ...text } = useInputValue("");
  const { onSubmit } = props;
  const addTodo = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit(text.value);
    resetValue();
  };
  return (
    <form onSubmit={addTodo}>
      <input {...text} />
    </form>
  );
};

export default Form;
