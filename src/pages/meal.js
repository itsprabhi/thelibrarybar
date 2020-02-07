import React, { Component } from 'react'
import '../css/forms.css'

export class Menu extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    render() {
        return (
            <div>
                <div className = 'menu-page'>
                    <div className = 'section-heading'>
                        <h2>
                            Menu
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
