import React, { Component } from 'react';
import axios from 'axios'

import '../css/menu.css'

export class MenuType extends Component {
    constructor(){
        super();
        this.state = {
            meals: null
        }
    }
    componentDidMount(){
        const mealType = this.props.match.params.mealType
        axios.get(`/meals/type/${mealType}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                meals: res.data
            })
        })
    }
    render() {
        let mealGrid = this.state.meals ? (
            this.state.meals.map(meal => (
                <div className = 'menu-grid-card'>
                    <div className = 'menu-grid-card-img'>
                        <img src = {meal.data.mealImg} alt = 'meal phto'></img>
                    </div>
                    <div className = 'menu-grid-card-txt'>
                        <h3>
                            {meal.data.mealTitle}
                        </h3>
                        <p>
                            {meal.data.mealPrice}
                        </p>
                        <div class = 'order-btn'>
                            <a href = {`/meal/${meal.mealId}`} id = {meal.mealId}>
                                View
                            </a>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className = 'menu-loading'>
                <p>
                    Loading
                </p>
            </div>
        )
        return (
            <div>
                <div className = 'menu-page'>
                    <div className = 'section-heading'>
                        <h2>
                            Menu
                        </h2>
                    </div>
                    <div className = 'menu-page-content'>
                        <div className = 'main-menu'>
                            <div className = 'main-menu-grid'>
                                {mealGrid}
                            </div>
                        </div>
                        <div className = 'menu-sidebar'>
                            <div className = 'menu-sidebar-section'>
                                <div className = 'menu-sidebar-section-heading'>
                                    <h5>
                                        Types
                                    </h5>
                                </div>
                                <div className = 'menu-sidebar-section-options'>
                                    <ul>
                                        <li>
                                            <a href = '/meals/type/burger'>
                                                Burgers
                                            </a>
                                        </li>
                                        <li>
                                            <a href = '/meals/type/pizza'>
                                                Pizza
                                            </a>
                                        </li>
                                        <li>
                                            <a href = '/meals/type/salad'>
                                                Salads
                                            </a>
                                        </li>
                                        <li>
                                            <a href = '/meals/type/drink'>
                                                Drinks
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className = 'menu-sidebar-section'>
                                <div className = 'menu-sidebar-section-heading'>
                                    <h5>
                                        Preference
                                    </h5>
                                </div>
                                <div className = 'menu-sidebar-section-options'>
                                    <ul>
                                        <li>
                                            <a href = '/meals/pref/veg'>
                                                Vegetarian
                                            </a>
                                        </li>
                                        <li>
                                            <a href = '/meals/pref/nonveg'>
                                                Non Vegetarian
                                            </a>
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
}

export default MenuType
