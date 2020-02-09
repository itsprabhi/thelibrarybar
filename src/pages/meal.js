import React, { Component } from 'react'
import axios from 'axios'
import '../css/forms.css'

export class Menu extends Component {
    constructor(){
        super();
        this.state = {
            mealData:null
        }
    }
    componentDidMount(){
        let mealId = this.props.match.params.id
        axios.get(`/meal/${mealId}`)
        .then(doc => {
            this.setState({
                mealData:doc.data
            })
        })
    }
    render() {
        let mealPage = this.state.mealData ? (
            <div className = 'meal-page'>
                <div className = 'container'>
                    <div className = 'meal-page-content'>
                        <div class = 'meal-page-img'>
                            <img src = {this.state.mealData.mealData.mealImg} alt = 'dish pic' />
                        </div>
                        <div className = 'meal-page-txt'>
                            <h3>
                                {this.state.mealData.mealData.mealTitle}
                            </h3>
                            <p>
                                {this.state.mealData.mealData.mealBody}
                            </p>
                            <h4>
                                $ {this.state.mealData.mealData.mealPrice}
                            </h4>
                            <div className = 'order-btn'>
                                <a href = '/'>
                                    Order
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className = 'loading-part'>
                loading....
            </div>
        )
        return (
            <div>
                {mealPage}
            </div>
        )
    }
}

export default Menu
