import React, { Component } from 'react'
import ViewPage from './ViewPage.png'
import './View.css'

export class View extends Component {
    render() {
        return (
            <div>
                <img src={ViewPage} className="forview"/>
            </div>
        )
    }
}

export default View