// import logo from './logo.svg';
// import { useState } from 'react';
// import {useContext} from 'react'
// import {useRef} from 'react'
import './App.css';
// import Button from './Component/Button'
// import {data} from './index'
import Header from './Components/Header'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  // const [show, setShow]=useState(true)

  // const ref = useRef(null)
  // const divApp = ref.current
  // if(divApp) {
  //   divApp.style.color = 'red'
  // }
  // const dataRes = useContext(data)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Header' element={<Header/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/product'>
          <Route path='/product-list'/>
        <Route path=':id' element={<Login/>}/>
        </Route>
      </Routes>
      <Link to='/Login'>
        <button>Login</button>
      </Link> 
      <Link to='/Header'>
        <button>Home</button>
      </Link>
      <Link to='/Login/1234'>
        <button>Login dong</button>
      </Link>
    </BrowserRouter>
  );
}

export default App;
