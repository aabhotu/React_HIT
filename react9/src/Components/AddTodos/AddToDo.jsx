import React from 'react';
import './AddTodo.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AddToDo({todo, setTodo,handleAddTodo, inputRef}){
    return(
        <div className='add-todo'>
            <input 
                type='text' 
                placeholder='Add a task here...' 
                className='add-todo_input'
                onKeyUp={(e) => handleAddTodo(e)}
                todo={todo.title}
                onChange ={(e) => { 
                    setTodo(prev =>({
                        ...prev,
                        title: e.target.value
                    })); 
                }}
                ref={inputRef}
            />
            <div className='add-todo_button'>
            <i class="fa-solid fa-plus" onClick={handleAddTodo}></i>
            </div>
        </div>
    )
}
export default AddToDo;
