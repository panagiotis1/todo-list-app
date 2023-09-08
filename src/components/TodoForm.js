import React, { useState } from "react";

export const TodoForm = ({addTask}) => {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if (value) {
      addTask(value)
      setValue("")
    }
  }

  return (
    <form 
        className="todo-form"
        onSubmit={handleSubmit}
    >
      <textarea
        type="text"
        className="todo-input"
        value={value}
        placeholder="Write your task..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
