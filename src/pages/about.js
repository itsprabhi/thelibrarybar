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
                            Welcome to the Library Bar. A place to immerse yourself into the world of drinks and books. The best place to relax and burst all of your stress. You will get the experience of our exotic drinks, along with the vibes of contentment and joy.
                            </p>
                            <p>
                            The Library Bar was started by John Doe in 1956. His goal was to create a place for delighting and making people feel their happiness. Since then, the Library Bar is making people wise and happy. Are you next?
                            </p>
                            <div className = 'order-btn'>
                            <a href = '/menu'>
                                Order Now
                            </a>
                            </div>
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
