import React, { Component } from 'react'
import '../css/about.css'

export class About extends Component {
    render() {
        const aboutImg = 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        return (
            <div>
                <div className = 'about-page'>
                    <div className = 'about-page-content'>
                        <div className = 'about-page-img'>
                            <img src = {aboutImg} alt = 'about page pic' />
                        </div>
                        <div className = 'about-page-text'>
                            <h3>
                                Hi, this is the Library Bar
                            </h3>
                            <p>
                                One of the best places to relax and have some delicious food. We make sure that bar gives you the best vibes.
                            </p>
                            {/* <div className = 'social-list'>
                                <ul>
                                    <li className = 'social-list-item'>
                                        <a href = '#'>
                                            <i class 
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
