import React, { Component } from 'react'

const Navbar = () => {
    return (
        <div>
            <div className = 'navbar'>
                <div className = 'container'>
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
                                    <a href = '#'>
                                        Home
                                    </a>
                                </li>
                                <li className = 'navbar-item'>
                                    <a href = '#'>
                                        Menu
                                    </a>
                                </li>
                                <li className = 'navbar-item'>
                                    <a href = '#'>
                                        Contact
                                    </a>
                                </li>
                                <li className = 'navbar-item'>
                                    <a href = '#'>
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}


export default Navbar
