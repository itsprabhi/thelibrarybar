import React, { Component } from 'react'
import axios from 'axios'
import '../css/forms.css'

export class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            errors:{}
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = () => {
        const userDetails = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('/login', userDetails)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
            this.props.history.push('/user')
        })
        .catch(err => {
            this.setState({
                errors:{
                    error:err.response.data.errors
                }
            })
            console.log(this.state.errors)
        })
    }
    render() {
        const emailHelper = this.state.errors.error ? (
            <p>
                {this.state.errors.error.email}
            </p>
        ) : (
            <p>
                
            </p>
            )
        const passwordHelper = this.state.errors.error ? (
            <p>
                {this.state.errors.error.password}
            </p>
        ) : (
            <p>
                
            </p>
            )
        const handleHelper = this.state.errors.error ? (
            <p>
                {this.state.errors.error.userHandle}
            </p>
        ) : (
            <p>
                
            </p>
            )
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
                                <div className = 'form-container'>
                                    
                                        <lable for = 'email' />Email<br />
                                        <input type = 'email' id = 'email' name = 'email' className = 'signup-email form-input-text' placeholder = 'Enter your email' onChange = {this.handleChange} /><br />
                                        {emailHelper}
                                        <lable for = 'password' />Password<br />
                                        <input type = 'password' id = 'password' name = 'password' className = 'signup-password form-input-text' placeholder = 'Enter your password' onChange = {this.handleChange}/><br />
                                        {passwordHelper}
                                        <button className = 'form-btn' onClick = {this.handleSubmit}>Submit</button>
                                    
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
