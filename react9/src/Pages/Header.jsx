import React from 'react';
import AddToDo from '../Components/AddToDo';
import './Header.scss'

function Header(){
    return(
        <div className='view-screen flex items-center justify-center h-full'>
            <div className='modal-todo'>
                <header className='modal-todo_heading h-full'>Todo List</header>
                <AddToDo/>
            </div>
        </div>
    )
}
export default Header;