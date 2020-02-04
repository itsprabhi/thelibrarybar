import React, { Component } from 'react'
import axios from 'axios'

// IMAGES
import homeBackground from '../img/home-background.jpg' 
import foodBackground from '../img/home-food.png'
import womenEatingFood from '../img/gallery-five.jpg' 

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
                        <img src = {meal.mealImg} alt = 'dish pic'></img>
                    </div>
                    <div className = 'home-menu-card-txt'>
                        <h5>
                            {meal.mealTitle}
                        </h5>
                        <p>
                            {meal.mealPrice}
                        </p>
                    </div>
                </div>
            )
        ) : (<p>Loading</p>);
        return (
            <div>
                <div className = 'home-intro'>
                    <img className = 'intro-background' src = {homeBackground} alt = 'background'></img>
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
                                    <a href = '/'>
                                        Order
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
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
