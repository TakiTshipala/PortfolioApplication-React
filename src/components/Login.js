import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "../App.scss";

export default class Login extends Component {
    constructor (props) {
        super (props)
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e) {
        this.setState ({
            [e.target.name]: e.target.value
        })
}

submitForm (e) {
    e.preventDefault()
    const{username,password} =  this.state
    if (username==="A" && password ==="B"){
        localStorage.setItem("token","wewekfjkjwe")
        this.setState ({
            loggedIn:true
        })
    }


}

    render() {
        if (this.state.loggedIn){
            return <Redirect to ="/admin"/>
        }


        return (
            <div clssName="background" align="center">
                <div className="sign">Login</div>

                <form onSubmit={this.submitForm}>
                
                <input className="pass" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
                <br/>
            
                <input className="pass" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                <br/>
                <input className="submit"  type="submit"/>
                <br/>
                </form>
                <a className="forgot" href="/register">Not a member?</a>
            </div>
        )
    }
}
