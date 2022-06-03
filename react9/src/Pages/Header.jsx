import React from 'react';
import AddToDo from '../Components/AddTodos/AddToDo';
import './Header.scss'
import Todo from '../Components/Todo/Todo';
import {useState, useRef} from 'react'

// const arrTodo=[
//     {
//         title: 'abc',
//         completed: false
//     },
//     {
//         title: 'xyz',
//         completed: false
//     },
//     {
//         title: 'www',
//         completed: true
//     },
// ]

function Header(){

    const[todo, setTodo] = useState('');
    const[listTodo, setListTodo] = useState([]);
    const inputRef = useRef();

    const handleAddTodo =(e) =>{
        if(e.keyCode === 13){
            console.log(todo);
           
            setTodo({
                title: '',
                completed: false
            })
            const arr = [...listTodo]
            arr.push(todo)
            setListTodo(arr)
        }
        inputRef.current.focus()
        // e.target.value = '';

    }

    const handleDeleteTodo = (index) =>{
        const arr = [...listTodo]
        arr.splice(index, 1)
        setListTodo(arr)
    }

    const handleChangeStatusTodo = (id) =>{
        listTodo.lenth >0 && listTodo.map((item, idx) => {
            if(idx === id){
                return item.completed = !item.completed
            }
            return item
        })
        console.log(listTodo)
    }

    return(
        <div className='view-screen flex items-center justify-center h-full'>
            <div className='modal-todo'>
                <header className='modal-todo_heading h-full'>Todo List</header>
                <AddToDo
                    todo={todo} 
                    setTodo={setTodo}
                    handleAddTodo={handleAddTodo}
                    inputRef={inputRef}
                />
                <div className='modal-todo_list'>
                    { listTodo.length >0 &&
                        listTodo.map((item, index) => (
                            <Todo todoItem={item} 
                                index={index} 
                                handleDeleteTodo={handleDeleteTodo}
                                handleChangeStatusTodo={handleChangeStatusTodo}
                                id={index}
                            />
                        ))
                    }
                </div>
                <div className="modal-todo-btn">
                    <button className="modal-todo-btn-checked">
                        Filter Checked
                    </button>
                    <button className="modal-todo-btn-checked">
                        Filter Not Checked
                    </button>
                    <button className="modal-todo-btn-checked">
                        Delete All Checked
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header;