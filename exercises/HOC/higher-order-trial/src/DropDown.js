import React, { Component } from 'react';


class DropDown extends Component {
    constructor(){
        super()
        this.state = {
            gender: ""
        }
    }
    handleChange = e => {
        this.setState({
            gender: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        alert(`You're ${this.state.gender}`)
    }

    render() {
        const Comp = this.props.component;
        return (
            <Comp gender={this.state} changeGender={this.handleChange}
            submitGender={this.handleSubmit}{...this.props} />
        );
    }
}

export default DropDown;

export const withDropDown = (C) => props => <DropDown component={C}{...props} />