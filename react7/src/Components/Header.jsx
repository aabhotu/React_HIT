import { useDispatch, useSelector } from 'react-redux';
import React, {useContext, useState, useNavigate } from 'react'
// import {data} from '../index'
import {addTodo, deleteTodo} from '../Redux/todoSlice'

const Header = (props) => {
    // const dataRes = useContext(data)
    // const navigate = useNavigate()

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const [todo, setTodo] = useState('')

    const dispatch = useDispatch()

    const data = useSelector(state => state.todo)
    // console.log(data)

    // const handleUsername =(e)=>{
    //     setUsername(e.target.value)
    // }

    // const handlePassword =(e)=>{
    //     setPassword(e.target.value)
    // }

    // console.log(username, password)

    // const handleSubmit =()=>{
    //     if(username === 'thao' && password === '123'){
    //         navigate('/User')
    //     }
    // }
    const handleSubmit =()=>{
        dispatch(addTodo(todo))
        setTodo('')
    }

    const handleDelete =(index) => {
        dispatch(deleteTodo(index))
    }

    return (
        // <div style={{fontSize: '20px'}}>Main Header</div>
        <div className="header">
            {/* <input type="text" onChange={handleUsername}></input> */}
            {/* <input type="password" onChange={handlePassword}/> */}

            <input value={todo} type="text" onChange={(e)=>setTodo(e.target.value)}></input>
            <button onClick={handleSubmit}>Add todo</button>

            {
                data && data.map((todo, index) => {
                    return (
                        <li key={index}>{todo}
                            <span style={{fontSize: 15, marginLeft: 10}} onClick={() => handleDelete(todo)}>x</span>
                        </li>
                    )
                })
            }

        </div>
    )
}
export default Header


// formik, react thunk, react-hook-form