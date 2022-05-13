import React from 'react';
// import {useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'
// import {data} from '../index'
import {useDispatch} from 'react-redux'
import {addTodo, deleteTodo} from '../redux/action'
import {useSelector} from 'react-redux'

const Header = (props) => {
    // const [usename,setUserName]=useState('')
    // const [password, setPassword] = useState('')
    // const dataRes = useContext(data)

    const todoList= useSelector(state=>state.todoList)

    const [value,setValue] = useState('')

    const dispatch = useDispatch()

    const handleSubmit =() =>{
        dispatch(addTodo(value))
        setValue('')
    }

    const handleDelete = (todo) =>{
        dispatch(deleteTodo(todo))
    }

    // const [arrList, setArrList] = useState('')

    // const arrListTodo = []
    // const navigate = useNavigate()
    // const params = useParams()
    // const handleSubmit = () =>{
    //     if(usename === "thao" && password === "123"){
    //         navigate('/Login')
    //     }
    // }

    // const handleSubmit = () =>{
    //     setArrList(prev => [...prev,value])
    // }
    return (
        <div >
            <h1 className="heading">Web Application</h1>
            <div className="form-input">
                <input type="text" placeholder='todo' value={value} style={{marginLeft: 20}} onChange={(e) => setValue(e.target.value)} />
                {/* <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> */}
                <button onClick={handleSubmit} style={{marginLeft: 20}}>Add todo</button>
            </div>
            {/* <button onClick={handleSubmit}>Sign up</button> */}
            {/* <button style={{marginLeft: 20}} onClick = {handleSubmit}>Add todo</button> */}
            {/* {
                arrList.map((item,index) => {
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
            }
                 ) } */}

            {
                todoList.length>0 &&(
                    todoList.map(item => (
                        <ul key={item}>
                            <li>{item}</li>
                            <button onClick={()=>handleDelete(item)}>Delete</button>
                        </ul>
                    ))
                )
            }

        </div>
    )
}
export default Header
