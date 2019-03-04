import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class StateHolder extends Component {
    constructor(){
        super()
        //this is the global state
        this.state = {
            array: []
        }
    }

    //get
    getUglies = () => {
        axios.get("https://api.vschool.io/shia/todo/").then(res => {
            this.setState({array: res.data})
        })
    }
    
    //post
    addObjs = (newObj) => {
        axios.post("https://api.vschool.io/shia/todo/", newObj).then(res => {
            this.setState(prevState => {
                return {
                    array: [res.data, ...prevState.array]
                }
            })
        })
    }

    //put 
    editUgly = (id, editedUgly) => {
        axios.put(`https://api.vschool.io/shia/todo/${id}`, editedUgly).then(res => {
            this.setState(prevState => {
                return {
                    array: prevState.array.map(item => item._id === id ? item = res.data : item)
                }
            })
        })
    }

    //delete 
    deleteUgly = (id) => {
        axios.delete(`https://api.vschool.io/shia/todo/${id}`).then(res => {
            this.setState(prevState => ({
                array: prevState.array.filter(item => item._id !== id),

            }))
        })
    }

    render() {
        return (
            <Provider value={{
                addObjs: this.addObjs,
                getUglies: this.getUglies,
                editUgly: this.editUgly,
                deleteUgly: this.deleteUgly,
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
