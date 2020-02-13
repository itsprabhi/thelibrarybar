import React, { Component } from 'react'
import axios from 'axios'

import '../../css/forms.css'

export class PostMeal extends Component {
    constructor(){
        super();
        this.state = {
            mealTitle: '',
            mealPrice: null,
            mealBody: '',
            mealImg: '',
            mealType:'',
            mealPref:'',
            errors:{}
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        const token = localStorage.getItem('FBIdToken')
        event.preventDefault();
        const meal = {
            mealImg:this.state.mealImg,
            mealTitle:this.state.mealTitle,
            mealPrice:this.state.mealPrice,
            mealBody:this.state.mealBody,
            mealType:this.state.mealType,
            mealPref:this.state.mealPref
        }
        axios.post('/meals',meal,{
            headers: { Authorization:token }
        })
        .then(res => {
            console.log(res.data)
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({
                errors:err.response.data
            })
            console.log(this.state.errors)
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className = 'container'>
                    <div className = 'forms'>
                        <div>
                            <div className = 'form-heading'>
                                <h1>
                                    Add Meal
                                </h1>
                            </div>
                            <div className = 'form-container'>
                                <form className = 'admin-add' id = 'admin-add' method = 'post'>
                                    <select id = 'mealType' className = 'meal-type' name = 'mealType'>
                                        <option value = 'burger'>
                                            Burgers
                                        </option>
                                        <option value = 'pizza'>
                                            Pizza
                                        </option>
                                        <option value = 'drink'>
                                            Drinks
                                        </option>
                                        <option value = 'salads'>
                                            Salads
                                        </option>
                                    </select>
                                    <select id = 'mealPref' className = 'meal-pref' name = 'mealPref'>
                                        <option value = 'veg'>
                                            Vegetarian
                                        </option>
                                        <option value = 'nonveg'>
                                            Non-Vegetarian
                                        </option>
                                    </select>
                                    <input type = 'text' id = 'mealTitle' name = 'mealTitle' className = 'admin-meal-title form-input-text' placeholder = 'Enter the meal title' onChange = {this.handleChange} /><br />
                                    <input type = 'text' id = 'mealPrice' name = 'mealPrice' className = 'admin-meal-price form-input-text' placeholder = 'Enter the meal price' onChange = {this.handleChange}/><br />
                                    <textarea id = 'mealBody' name = 'mealBody' className = 'admin-meal-body form-input-text' placeholder = 'Enter the meal body' onChange = {this.handleChange}></textarea><br />
                                    <input type= 'text' id = 'mealImg' name = 'mealImg' className = 'admin-meal-img form-input-text' placeholder = 'Enter img url' onChange = {this.handleChange}></input><br />
                                    <button className = 'form-btn' onClick = {this.handleSubmit}>Publish</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostMeal
