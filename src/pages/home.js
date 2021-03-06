/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'
import axios from 'axios'

// IMAGES
import homeBackground from '../img/home-background.jpg' 
import foodBackground from '../img/home-food.png'
import womenEatingFood from '../img/gallery-five.jpg'

import gridPicOne from '../img/gallery-one.jpg'
import gridPicTwo from '../img/gallery-two.jpg'
import gridPicThree from '../img/gallery-three.jpg'
import gridPicFour from '../img/gallery-four.jpg'
import gridPicFive from '../img/gallery-five.jpg'

let eventOne = 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
let eventTwo = 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
let eventThree = 'https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
let map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91283.43345969872!2d-79.7357621310863!3d44.35911785057593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON!5e0!3m2!1sen!2sca!4v1578874659424!5m2!1sen!2sca'

export class Home extends Component {
    state = {
        meals : null
    }
    componentDidMount(){
        axios.get('/meals')
        .then(res => {
            this.setState({meals: res.data})
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        const mealGrid = this.state.meals ? (
            this.state.meals.slice(0,6).map(meal => 
                <div className = 'home-menu-card'>
                    <div className = 'home-menu-card-img'>
                        <img src = {meal.data.mealImg} alt = 'dish pic'></img>
                    </div>
                    <div className = 'home-menu-card-txt'>
                        <h5>
                            <a href = {`meal/${meal.mealId}`}>{meal.data.mealTitle}</a>
                        </h5>
                        <p>
                            $ {meal.data.mealPrice}
                        </p>
                    </div>
                </div>
            )
        ) : (<p>Loading</p>);
        return (
            <div>
                <div className = 'home-intro'>
                    <img className = 'intro-background' src = {homeBackground} alt = 'background'></img>
                    <div className = 'home-background-filter'></div>
                    <div className = 'container'>
                        <div className = 'home-intro-content'>
                            <div className = 'home-intro-text'>
                                <h1>
                                    The Library Bar
                                </h1>
                                <p>
                                    A drink of knowledge
                                </p>
                                <div className = 'order-btn'>
                                    <a href = '/menu'>
                                        Order Now
                                    </a>
                                </div>
                            </div>
                            <div className = 'home-intro-img'>
                                <img className = 'intro-food-img' src = {foodBackground} alt = 'soup png'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'home-about'>
                    <div className = 'container'>
                        <div className = 'home-about-content'>
                            <div className = 'home-about-txt'>
                                <h2>
                                    About Us
                                </h2>
                                <p>
                                    Welcome to the Library Bar. A place to immerse yourself into the world of drinks and books. The best place to relax and burst all of your stress. You will get the experience of our exotic drinks, along with the vibes of contentment and joy.
                                </p>
                                <h5>
                                    What makes us special
                                </h5>
                                <ul className = 'home-about-txt-features'>
                                    <li>
                                        Quality
                                    </li>
                                    <li>
                                        Vibes
                                    </li>
                                    <li>
                                        Books
                                    </li>
                                    <li>
                                        Variety
                                    </li>
                                    <li>
                                        Ethics
                                    </li>
                                </ul>
                            </div>
                            <div className = 'home-about-img'>
                                <img src = {womenEatingFood} alt = 'women enjoying meal'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'home-menu'>
                    <div className = 'container'>
                        <div className = 'section-heading'>
                            <h2>
                                Our Menu
                            </h2>
                        </div>
                        <div className = 'home-menu-content'>
                            <div className = 'home-menu-grid'>
                                {mealGrid}
                            </div>
                        </div>
                        <div className = 'order-btn btn-home-menu'>
                            <a href = '/menu'>
                                More
                            </a>
                        </div>
                    </div>
                </div>
                <div className = 'home-events'>
                    <div className = 'section-heading'>
                        <h2>
                            Events
                        </h2>
                    </div>
                    <div className = 'container'>
                        <div className = 'home-events-content'>
                            <div className = 'home-event-card'>
                                <div className = 'home-event-card-img'>
                                    <img src = {eventOne} alt = 'event pic'></img>
                                </div>
                                <div className = 'home-event-card-txt'>
                                    <h5>Trivia Night</h5>
                                    <p>Monday, 25 Jan 9:00pm</p>
                                    <div className = 'order-btn event-btn'>
                                        <a href = '/'>
                                            More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className = 'home-event-card'>
                                <div className = 'home-event-card-img'>
                                    <img src = {eventThree} alt = 'event pic'></img>
                                </div>
                                <div className = 'home-event-card-txt'>
                                    <h5>Punjabi Night</h5>
                                    <p>Monday, 30 Jan 9:00pm</p>
                                    <div className = 'order-btn'>
                                        <a href = '/'>
                                            More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className = 'home-event-card'>
                                <div className = 'home-event-card-img'>
                                    <img src = {eventTwo} alt = 'event pic'></img>
                                </div>
                                <div className = 'home-event-card-txt'>
                                    <h5>Stand-Up Night</h5>
                                    <p>Friday, 28 Feb 9:00pm</p>
                                    <div className = 'order-btn'>
                                        <a href = '/'>
                                            More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'home-contact'>
                    <div className = 'section-heading'>
                        <h2>Contact Us</h2>
                    </div>
                    <div className = 'container'>
                        <div className = 'home-contact-content'>
                            <div className = 'home-contact-form'>
                                <form>
                                    <input className = 'form-inputs' type = 'email' id = 'email' name = 'email'></input><br />
                                    <input className = 'form-inputs' type = 'text' id = 'name' name = 'name'></input><br />
                                    <textarea className = 'form-inputs home-form-text'></textarea><br />
                                    <input className = 'form-btn' type="submit" value="Submit" />
                                </form>
                            </div>
                            <div className = 'home-contact-text'>
                                <div className = 'home-contact-txt'>
                                    <h5>
                                        Address - 222 abc st, Barrie
                                    </h5>
                                    <h5>
                                        Phone - xxx-xxx-xxxx
                                    </h5>
                                </div>
                                <div className = 'contact-map'>
                                    <iframe className = 'map-embed' src={map} width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'home-gallery'>
                    <div className = 'home-gallery-grid'>
                        <div className = 'gallery-grid-pic grid-pic-one'>
                            <img src = {gridPicOne} alt = 'gallery one'></img>
                        </div>
                        <div className = 'gallery-grid-pic grid-pic-two'>
                            <img src = {gridPicTwo} alt = 'gallery one'></img>
                        </div>
                        <div className = 'gallery-grid-pic grid-pic-three'>
                            <img src = {gridPicThree} alt = 'gallery one'></img>
                        </div>
                        <div className = 'gallery-grid-pic grid-pic-four'>
                            <img src = {gridPicFour} alt = 'gallery one'></img>
                        </div>
                        <div className = 'gallery-grid-pic grid-pic-five'>
                            <img src = {gridPicFive} alt = 'gallery one'></img>
                        </div>
                        <div className = 'gallery-grid-pic grid-pic-one'>
                            <img src = {gridPicOne} alt = 'gallery one'></img>
                        </div>
                        <div className = 'gallery-grid-pic grid-pic-two'>
                            <img src = {gridPicTwo} alt = 'gallery one'></img>
                        </div>
                        <div className = 'gallery-grid-pic grid-pic-three'>
                            <img src = {gridPicThree} alt = 'gallery one'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
