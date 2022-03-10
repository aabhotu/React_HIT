import React from 'react'
import {useState} from 'react'

function ChangeText (){
    const [text, setText] = useState('handsome boy');
    const handleText =() =>{
        setText('beautiful girl');
    }
    return (
        <div>
            <h1>{text}</h1>
            <button onClick = {handleText}>setText</button>
        </div>
    )
}
export default ChangeText;