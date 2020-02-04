import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className = 'navbar'>
                <div className = 'container'>
                    <div className = 'nav-container'>
                        <div className = 'navbar-brand'>
                            <div className = 'navbar-brand-text'>
                                <h2>
                                    The Library Bar
                                </h2>
                            </div>
                        </div>
                        <div className = 'navbar-list'>
                            <div className = 'navbar-items'>
                                <ul>
                                    <li className = 'navbar-item'>
                                        <Link to = '/'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className = 'navbar-item'>
                                        <Link to = '/menu'>
                                            Menu
                                        </Link>
                                    </li>
                                    <li className = 'navbar-item'>
                                        <Link to = '/contact'>
                                            Contact
                                        </Link>
                                    </li>
                                    <li className = 'navbar-item'>
                                        <Link to = '/about'>
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}


export default Navbar
