import React from 'react'

const Heading =(props) =>{
    const {color, setColor} = props;
    const handleColor =() =>{
        setColor('pink');
    }
    return (
        <div>
            <h1 style = {{color: color}}>{props.title}</h1>
            <button onClick = {handleColor}>setColor</button>
        </div>
    )
}
export default Heading;