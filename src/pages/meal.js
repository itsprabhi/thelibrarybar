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
            console.log(this.state.mealData)
        })
    }
    render() {
        return (
            <div>
                <div className = 'meal-page'>
                    <div className = 'section-heading'>
                        <h2>
                            
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
