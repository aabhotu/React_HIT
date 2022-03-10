import React from 'react'
import {useState} from 'react'
function Number (){
    const [number, setNumber] = useState(0)
    const handleNumber =() =>{
        setNumber(number + 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick = {handleNumber}>setNumber</button>
        </div>
    )
}
export default Number;