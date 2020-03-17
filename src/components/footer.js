import React from 'react'
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
                                The Library Bar was started by John Doe in 1956. His goal was to create a place for delighting and making people feel their happiness. Since then, the Library Bar is making people wise and happy. Are you next?
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
