import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext()

class StateHolder extends Component {
    constructor(){
        super()
        //this is the global state
        this.state = {
            array: [
                {
                    title: "Shia Lebeouf",
                    description: "Gods gift to man",
                    url: "https://www.thewrap.com/wp-content/uploads/2014/05/shialabeouf.jpg"
                }
            ]
        }
    }

    addObjs = (newObj) => {
        this.setState(prevState => {
            return {
                array: [newObj, ...prevState.array]
            }
        })
    }

    render() {
        return (
            <Provider value={{
                addObjs: this.addObjs,
                ...this.state
                }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default StateHolder;

//Consumer is considered JSX
//This is the boiler plate 

export function withState (C){
    return props => 
        <Consumer>
            {value => <C {...value}{...props}/>}
        </Consumer>
}
