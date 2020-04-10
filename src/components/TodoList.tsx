import React from "react";

const List = (props: any) => {
  return (
    <div>
      {props.todos.map((todo: string, index: number) => {
        return <div key={index}>{todo}</div>;
      })}
    </div>
  );
};

export default List;
