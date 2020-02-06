import React, { Component } from 'react'
import '../css/forms.css'

export class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = () => {

    }
    render() {
        return (
            <div>
                <div className = 'login-page'>
                    <div className = 'container'>
                        <div className = 'forms'>
                            <div>
                                <div className = 'form-heading'>
                                    <h1>
                                        Login
                                    </h1>
                                </div>
                                <div class = 'form-container'>
                                    <form className = 'login' id = 'login' method = 'post'>
                                        <lable for = 'email' />Email<br />
                                        <input type = 'email' id = 'email' name = 'email' className = 'login-email form-input-text' placeholder = 'Enter your email' onChange = {this.handleChange} /><br />
                                        <lable for = 'password' />Password<br />
                                        <input type = 'password' id = 'password' name = 'password' className = 'login-password form-input-text' placeholder = 'Enter your password' onChange = {this.handleChange}/><br />
                                        <button className = 'form-btn' onClick = {this.handleSubmit}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
