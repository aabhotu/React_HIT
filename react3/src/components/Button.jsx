import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const [color, setColor] = useState('pink')
  const [name, setName] = useState('Dollar Cat')
  const handleText =() =>{
    setColor('purple')
    setName('Money Cat')
  }
  return (
    <div>
      <h1>{props.text}</h1>
      <h2 style={{color}}>{name}</h2>
      <button onClick={handleText}>Click Me</button>
    </div>
  )
}
Button.propsTypes ={
  text: PropTypes.string
}
Button.defaultProps = {
  text:'Dollar'
}
export default Button