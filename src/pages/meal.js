import React, { Component } from 'react'
import axios from 'axios'
import '../css/forms.css'
import OrderModal from '../components/orderModal'

export class Menu extends Component {
    constructor(){
        super();
        this.state = {
            mealData:null,
            orderOn:false
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
    modalSwitch = () => {
        if(this.state.orderOn){
            this.setState({
                orderOn:false
            })
        }else{
            this.setState({
                orderOn:true
            })
        }
    }
    modalClose = () => {
        this.setState({
            orderOn:false
        })
    }
    render() {
        let modal = this.state.orderOn ? (
            <OrderModal meal = {this.state.mealData} close = {this.modalClose} />
        ):(
            <p></p>
        )
        let mealPage = this.state.mealData ? (
            <div className = 'meal-page'>
                {modal}
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
                                <button class = 'meal-order-btn' onClick = {this.modalSwitch}>
                                    Order
                                </button>
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
