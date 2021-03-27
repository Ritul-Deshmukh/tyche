import React, { Component } from 'react'
import OfferPage from './OfferPage.png'
import './View.css'

export class Offer extends Component {
    render() {
        return (
            <div>
                <img src={OfferPage} className="forview"/>
            </div>
        )
    }
}

export default Offer