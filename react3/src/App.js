// import logo from './logo.svg';
import { useState } from 'react';
import {useRef} from 'react'
import './App.css';
import Button from './components/Button'

function App() {

  const [show, setShow]=useState(true)

  const ref = useRef(null)

  
  return (
    <div className="App" ref={ref}>
      {
        show && <Button/>
      }
      <button onClick={() => setShow(!show)}> click </button>
      {/* <button text={text}></button> */}
    </div>
  );
}

export default App;
