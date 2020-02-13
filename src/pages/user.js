import React, { Component } from 'react'

export class User extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                User
            </div>
        )
    }
}

export default User
