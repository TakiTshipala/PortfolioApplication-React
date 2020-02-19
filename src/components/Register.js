import React, { Component } from 'react';
import "../Login.scss";

export default class Register extends Component {
    constructor(props){
        super (props);

        this.state ={
            Name: null,
            Surname: null,
            Email: null,
            Password: null,
            formErros: {
                Name:"",
                Surname:"",
                Email:"",
                Password:""
            }
        };
    }

    handleSubmit= e => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="sign" align="center">Sign Up</div>
                <form onSubmit={this.handleSubmit} noValidate>
                <div className="floating-label">
                    <input className="pass" type = "text" placeholder="Name" type="text" name="Name" noValidate onChange = {this.handleChange}/>
                </div>
                <div>
                    <input className="pass" type = "text" placeholder="Surname" type="text" name="Surname" noValidate onChange = {this.handleChange}/>
                </div>
                <div >
                    <input className="pass" type = "text" placeholder="Email" type="text" name="Email" noValidate onChange = {this.handleChange}/>
                </div>
                <div>
                    <input className="pass" type = "text" placeholder="Password" type="text" name="Passwrod" noValidate onChange = {this.handleChange}/>
                </div>
                <div align="center">
                    <button className="submit" type="Submit">Register</button>
                    <br/>
                    <a className="forgot" align="center" href="/Login">Already a member?</a>
                </div>
                </form>
            </div>
        )
    }
}
