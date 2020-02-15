import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className = 'footer'>
                <div className = 'container'>
                    <div className = 'footer-container'>
                        <div className = 'footer-brand'>
                            <div className = 'footer-brand-text'>
                                <h5>
                                    The Library Bar
                                </h5>
                            </div>
                            <div className = 'footer-brand-para'>
                                <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className = 'footer-navbar-list'>
                                <div className = 'footer-navbar-items'>
                                    <ul>
                                        <li className = 'footer-navbar-item'>
                                            <Link to = '/'>
                                                Home
                                            </Link>
                                        </li>
                                        <li className = 'footer-navbar-item'>
                                            <Link to = '/menu'>
                                                Menu
                                            </Link>
                                        </li>
                                        <li className = 'footer-navbar-item'>
                                            <Link to = '/contact'>
                                                Contact
                                            </Link>
                                        </li>
                                        <li className = 'footer-navbar-item'>
                                            <Link to = '/about'>
                                                About
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'copyright'>
                        <div className = 'copyright-txt'>
                            <p>
                                Copyrights all reserved. @thelibrarybar 2020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}


export default Footer
