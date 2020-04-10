import React, { useState } from "react";

const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const resetValue = (): void => {
    setValue("");
  };
  return {
    value,
    onChange,
    resetValue,
  };
};

export default useInputValue;
