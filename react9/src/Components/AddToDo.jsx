import React from 'react';
import './AddTodo.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AddToDo(){
    return(
        <div className='add-todo'>
            <input type='text' placeholder='Add a task here...' className='add-todo_input'/>
            <div className='add-todo_button'>
            <i class="fa-solid fa-plus"></i>
            </div>
        </div>
    )
}
export default AddToDo;