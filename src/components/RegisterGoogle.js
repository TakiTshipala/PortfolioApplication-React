import React, { Component } from 'react'

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
                <div className="sign" align="center">Sign Up with Google</div>
                <form onSubmit={this.handleSubmit} noValidate>
                <div>
                  
                    <input className="pass" type = "text" placeholder="Email" type="text" name="Email" noValidate onChange = {this.handleChange}/>
                </div>
                <div>
                    
                    <input className="pass" type = "text" placeholder="Password" type="text" name="Passwrod" noValidate onChange = {this.handleChange}/>
                </div>
                <div>
                    <button className="submit2" align="center" type="Submit">Register</button>
                    <br></br>
                    <a className="forgot2" href="/Login">Already a member?</a>
                </div>
                
                </form>
            </div>
        )
    }
}
