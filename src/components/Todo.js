import React from 'react'
import {ReactComponent as Pen} from '../svg/pen.svg'
import {ReactComponent as Trash} from '../svg/trash.svg'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='todo'>
        <p
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? 'completed' : ''}`}
        >
          {task.task}
        </p>
        <div>
          <Pen className='pen-icon' onClick={() => editTodo(task.id)}/>
          <Trash className='trash-icon' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
