import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class Navbar extends Component {
    state = {
        onOff:false
    }
    toggleSwitch = () => {
        if(this.state.onOff){
            this.setState({
                onOff:false
            })
        }else{
            this.setState({
                onOff:true
            })
        }
    }
    render() {
        let navOff
        let navOn = 'display-nav'
        let navClass = this.state.onOff ? navOff : navOn
        return (
            <div>
                 <div className = 'navbar'>
                    <div className = 'container'>
                        <div className = 'nav-container'>
                            <div className = 'navbar-brand'>
                                <div className = 'navbar-brand-text'>
                                    <h4>
                                        The Library Bar
                                    </h4>
                                </div>
                            </div>
                            <div className = 'navbar-list'>
                                <div className = {`navbar-items ${navClass}`}>
                                    <ul>
                                        <li className = 'navbar-item' onClick = {this.toggleSwitch}>
                                            <Link to = '/'>
                                                Home
                                            </Link>
                                        </li>
                                        <li className = 'navbar-item' onClick = {this.toggleSwitch}>
                                            <Link to = '/menu'>
                                                Menu
                                            </Link>
                                        </li>
                                        <li className = 'navbar-item' onClick = {this.toggleSwitch}>
                                            <Link to = '/contact'>
                                                Contact
                                            </Link>
                                        </li>
                                        <li className = 'navbar-item' onClick = {this.toggleSwitch}>
                                            <Link to = '/about'>
                                                About
                                            </Link>
                                        </li>
                                        <li className = 'navbar-item'>
                                            <div className="dropdown">
                                                <button className="dropbtn">User</button>
                                                <div className="dropdown-content">
                                                    <a href="/login" onClick = {this.toggleSwitch}>Login</a>
                                                    <a href="/signup" onClick = {this.toggleSwitch}>Signup</a>
                                                    <a href = '/user' onClick = {this.toggleSwitch}>Dashboard</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className = 'navbar-toggle' onClick = {this.toggleSwitch}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Navbar
