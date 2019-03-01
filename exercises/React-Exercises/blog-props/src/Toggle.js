import React from "react";

export default class Toggler extends React.Component {
    constructor(){
        super()
        this.state = {
            on: false
        }
    }

    toggle = () => {
        this.setState(({on}) => ({on: !on}))
    }

    render(){
        const Comp = this.props.component;
        return (
            <Comp on={this.state.on} toggle={this.toggle}{...this.props}/>
        )
    }
}

export function withToggler(C){
    return function (props){
        return <Toggler component={C}{...props} />
    }
}