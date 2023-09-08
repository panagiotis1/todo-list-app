import React, { useState } from "react";

export const TodoFormEdit = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault()
    editTodo(value, task.id)
    setValue("")
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
        placeholder="Update your task..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
