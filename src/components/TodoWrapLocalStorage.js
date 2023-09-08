import React, { useState, useEffect} from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { TodoFormEdit } from "./TodoFormEdit";
uuidv4();

export const TodoWrapLocalStorage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(saveTodos)
  }, [])

  function addTask(todo) {
    const newTodo = 
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  function toggleComplete(id) {
    const newTodos = todos.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x));
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((x) => x.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  function editTodo(id) { // This function is used to toggle the edited property of a todo item with a specific id.
    const newTodos = todos.map((x) => (x.id === id ? { ...x, edited: !x.edited } : x));
    setTodos(newTodos)
  }

  function editTask(task, id) { // This function is used to update the task property of a todo item with a specific id.
    const newTodos = todos.map(x => x.id === id ? {...x, task, edited: !x.edited} : x);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  return (
    <div className="todo-wrap">
      <h1>Things I Have To Do</h1>
      <TodoForm addTask={addTask}/>
      {todos.map((x, i) => (
        x.edited ? (
          <TodoFormEdit editTodo={editTask} task={x} key={x.id}/>
        ) : (
          <Todo
            task={x}
            key={i}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}
    </div>
  );
};
