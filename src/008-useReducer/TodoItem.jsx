import React from 'react'

export const  TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
            <li className="list-group-item d-flex justify-content-between">
                <span 
                  aria-label="span"
                  role='button'
                  onClick={ () => onToggleTodo(todo) }
                  className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                >
                  {todo.description}
                </span>
                <button 
                  aria-label='btn-delete'
                  className="btn btn-danger" 
                  onClick={ () => onDeleteTodo(todo) }
                >Borrar</button>
            </li>
  )
}
