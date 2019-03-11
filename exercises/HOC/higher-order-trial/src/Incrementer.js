import React, { Component } from 'react';

class Incrementer extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    counter = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        const Comp = this.props.component;
        return (
            <Comp counter={this.counter} count={this.state.count}{...this.props}/>
        )
    }
}

export default Incrementer;

export const withIncrementer = (C) => props => <Incrementer component={C}{...props} />