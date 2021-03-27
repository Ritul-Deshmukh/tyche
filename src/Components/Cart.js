import React, { Component } from 'react'
import CartPage from './CartPage.jpeg'
import './View.css'

export class Cart extends Component {
    render() {
        return (
            <div>
                <img src={CartPage} className="forview"/>
            </div>
        )
    }
}

export default Cart