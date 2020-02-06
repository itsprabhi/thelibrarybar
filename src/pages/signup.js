import React, { Component } from 'react'
import '../css/forms.css'

export class Signup extends Component {
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
                                        Signup
                                    </h1>
                                </div>
                                <div className = 'form-container'>
                                    <form className = 'signup' id = 'signup' method = 'post'>
                                        <lable for = 'email' />Email<br />
                                        <input type = 'email' id = 'email' name = 'email' className = 'signup-email form-input-text' placeholder = 'Enter your email' onChange = {this.handleChange} /><br />
                                        <lable for = 'password' />Password<br />
                                        <input type = 'password' id = 'password' name = 'password' className = 'signup-password form-input-text' placeholder = 'Enter your password' onChange = {this.handleChange}/><br />
                                        <lable for = 'confirmedPassword' />Confirmed Password<br />
                                        <input type = 'password' id = 'confirmedPassword' name = 'confirmedPassword' className = 'signup-password form-input-text' placeholder = 'Renter your password' onChange = {this.handleChange}/><br />
                                        <lable for = 'userHandle' />User handle<br />
                                        <input type = 'text' id = 'userHandle' name = 'userHandle' className = 'signup-userHandle form-input-text' placeholder = 'Enter your password' onChange = {this.handleChange}/><br />
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

export default Signup
