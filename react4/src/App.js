// import logo from './logo.svg';
// import { useState } from 'react';
import {useContext} from 'react'
import {useRef} from 'react'
import './App.css';
// import Button from './Component/Button'
import {data} from './index'
import Header from './Component/Header'

function App() {

  // const [show, setShow]=useState(true)

  const ref = useRef(null)
  // const divApp = ref.current
  // if(divApp) {
  //   divApp.style.color = 'red'
  // }
  const dataRes = useContext(data)

  return (
    <div className="App" ref={ref}>
      <Header text={"abs"}/>
      {/* {
        show && <Button/>
      }
      <button onClick={() => setShow(!show)}> click </button> */}
      {/* <button text={text}></button> */}
    </div>
  );
}

export default App;
