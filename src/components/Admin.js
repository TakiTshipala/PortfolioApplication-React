import React, { Component } from 'react';
import {Link } from 'react-router-dom'

export default class  extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null){
            loggedIn = false
        }

    }
    render() {
        return (
            <div>
                <h1> This is the admin page. Only Auth people can see this [Dashboard]</h1>
                <Link className="forgot" to="/logout">Logout</Link>
            </div>
        )
    }
}
