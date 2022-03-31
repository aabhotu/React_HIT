import React from 'react';
import {useContext} from 'react'
import {data} from '../index'

const Header = (props) => {
    const dataRes = useContext(data)
    return (
        <div>{props.text}</div>
    )
}
export default Header
