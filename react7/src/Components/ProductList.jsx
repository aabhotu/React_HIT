import React from 'react'
import './scss/Product-list.scss'

const ProductList =() => {
    return(
        <div className="header">
            <div className="header__logo">
                React
            </div>
            <div className="header__menu">
                <div className="header__menu-item">
                    Docs
                </div>
                <div className="header__menu-item">
                    Tutorial
                </div>
                <div className="header__menu-item">
                    Blog
                </div>
                <div className="header__menu-item">
                    Community
                </div>
            </div>
            <div className="header__input">
                <input type="text"/>
            </div>
        </div>
    )
}
export default ProductList