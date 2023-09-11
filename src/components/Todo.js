import React, { useState, useEffect } from "react";
import { ReactComponent as Pen } from "../svg/pen.svg";
import { ReactComponent as Trash } from "../svg/trash.svg";
import { ReactComponent as Checked } from "../svg/checked.svg";
import { ReactComponent as NotChecked } from "../svg/notChecked.svg";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [isAlternateIcon, setIsAlternateIcon] = useState(
    localStorage.getItem(task.id) === "true"
  );

  useEffect(() => {
    localStorage.setItem(task.id, isAlternateIcon);
  }, [isAlternateIcon]);

  const handleIconClick = () => {
    setIsAlternateIcon(!isAlternateIcon);
    toggleComplete(task.id);
  };

  return (
    <div className="todo">
      <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      <div>
        <Pen className="pen-icon" onClick={() => editTodo(task.id)} />
        <Trash className="trash-icon" onClick={() => deleteTodo(task.id)} />
        {isAlternateIcon ? (
          <Checked className="notChecked-icon" onClick={handleIconClick} />
        ) : (
          <NotChecked className="checked-icon" onClick={handleIconClick} />
        )}
      </div>
    </div>
  );
};
