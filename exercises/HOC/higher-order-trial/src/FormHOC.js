import React, { Component } from 'react';

class FormHOC extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        alert(`Your username is ${this.state.username} and your password is ${this.state.password}`)
    }
    render() {
        const Comp = this.props.component;
        return (
            <Comp handleSubmit={this.handleSubmit} handleChange={this.handleChange} userInfo={this.state}{...this.props}/>
        )
    }
}

export default FormHOC;

export const withForm = (C) => props => <FormHOC component={C}{...props} />