import React, { Component } from 'react'

export class User extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                User
            </div>
        )
    }
}

export default User
