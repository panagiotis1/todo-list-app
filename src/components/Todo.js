import React, { useState, useEffect } from "react";
import { ReactComponent as Pen } from "../svg/pen.svg";
import { ReactComponent as Trash } from "../svg/trash.svg";
import { ReactComponent as Checked } from "../svg/checked.svg";
import { ReactComponent as NotChecked } from "../svg/notChecked.svg";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [isAlternateIcon, setIsAlternateIcon] = useState(
    localStorage.getItem(task.id) === "true"
  );
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    localStorage.setItem(task.id, isAlternateIcon);
    console.log("isAlternateIcon", isAlternateIcon);
  }, [isAlternateIcon]);

  const handleIconClick = () => {
    setIsAlternateIcon(!isAlternateIcon);
    toggleComplete(task.id);
  };

  const handleDelete = () => {
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    deleteTodo(task.id);
    setConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  return (
    <div className="todo">
      <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      <div>
        <Pen className="pen-icon" onClick={() => editTodo(task.id)} />
        <Trash className="trash-icon" onClick={handleDelete} />
        {isAlternateIcon ? (
          <Checked className="notChecked-icon" onClick={handleIconClick} />
        ) : (
          <NotChecked className="checked-icon" onClick={handleIconClick} />
        )}
      </div>

      {confirmDelete && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this task?</p>
            <div className="btn-container">
              <button onClick={handleConfirmDelete}>OK</button>
              <button className="cancel" onClick={handleCancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
