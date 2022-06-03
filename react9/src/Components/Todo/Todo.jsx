import React from 'react'
import './Todo.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'

function Todo({todoItem,handleDeleteTodo,id,handleChangeStatusTodo}) {

  return (
    <div className='todo'>
        <div className="todo_title">
            {todoItem.title}
        </div>
        <div className="todo_icon">
            <div 
                className="todo_icon-checked" 
                onClick={() => handleChangeStatusTodo(id)}
            >
                <FontAwesomeIcon icon={faCheck}/>
            </div>
            <div className="todo_icon-clear">
                <FontAwesomeIcon 
                    icon={faXmark} 
                    onClick={()=>handleDeleteTodo(id)}
                />
            </div>
        </div>
    </div>
  )
}

export default Todo