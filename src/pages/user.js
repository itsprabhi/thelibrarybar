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
            <div style = {{
                width:"100%",
                textAlign:'center',
                margin:'50px auto'
            }}>
                Hi WELCOME!
            </div>
        )
    }
}

export default User
