import React from 'react';
import {useContext} from 'react'
import {data} from '../index'

const Header = (props) => {
    const dataRes = useContext(data)
    return (
        <div style={{fontSize: '20px'}}>Main Header</div>
    )
}
export default Header
