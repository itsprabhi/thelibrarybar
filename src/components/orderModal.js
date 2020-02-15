import React, { Component } from 'react'

import '../css/forms.css'

export class OrderModal extends Component {
    constructor(props){
        super();
        this.state = {
            orderQuantity :1,
            orderPrice: null,
            mealData: props.meal.mealData
        }
    }
    componentDidMount(){
        this.setState({
            orderPrice: this.state.orderQuantity * this.state.mealData.mealPrice
        })
    }
    addQuanity =() => {
        let add = this.state.orderQuantity + 1;
        this.setState({
            orderQuantity: add
        })
    }
    lessQuanity =() => {
        if(this.state.orderQuantity === 0){
            return
        }else{
            let less = this.state.orderQuantity - 1;
            this.setState({
                orderQuantity: less
            })
        }
    }
    render() {  
        let { mealTitle,mealPrice,mealImg } = this.state.mealData;
        let mealTotal = mealPrice * this.state.orderQuantity;
        return (
            <div>
                <div className = 'modal-container'>
                    <div className = 'modal'>
                        <div className = 'modal-content'>
                            <div className = 'modal-content-section'>
                                <div className = 'modal-heading'>
                                    <h4>Order Item</h4>
                                </div>
                                <div className = 'toggle' onClick = {this.props.close}>
                                    X
                                </div>
                            </div>
                            <div className = 'order-info'>
                                <div className = 'order-info-section'>
                                    <div className = 'order-pic'>
                                        <img src = {mealImg} alt = 'order pic'></img>
                                    </div>
                                    <div className = 'order-name'>
                                        <h5>Name</h5>
                                        {mealTitle}
                                    </div>
                                    <div className = 'order-price'>
                                        <h5>Price</h5>
                                        $ {mealPrice}
                                    </div>
                                    <div className = 'order-quantity'>
                                        <h5>Quantity</h5>
                                        <button class = 'modal-btn' onClick = {this.addQuanity}>+</button>
                                        {this.state.orderQuantity}
                                        <button class = 'modal-btn' onClick = {this.lessQuanity}>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className = 'order-summary'>
                                <div className = 'order-total-price'>
                                    <div className = 'order-text'>
                                        <h3>
                                            Total order price :    
                                        </h3>
                                    </div>
                                    <div className = 'order-value'>
                                        <h3>
                                            $ {mealTotal}
                                        </h3>
                                    </div>
                                </div>
                                <div className = 'order-btn-modal'>
                                    <button href = '/'>
                                        Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderModal
