import React from "react";
import axios from "axios";
import {api_key} from "./api";
const { Consumer, Provider } = React.createContext();

export default class StateHolder extends React.Component {
    constructor(){
        super()
        this.state = {
            arr: []
        }
    }

    getData = (title, year) => {
        console.log(`http://www.omdbapi.com/?apikey=${api_key}&t=${title}&y=${year}`)
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&t=${title}&plot=full&y=${year}`).then(res => {
            this.setState({ arr: [res.data]})
            console.log('this.state.arr',this.state.arr)
        })
    }


    render(){
        return (
            <Provider value={{
                getData: this.getData,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export function withState(C){
    return props => (
        <Consumer>
            {value => <C {...value}{...props}/>}
        </Consumer>
    )
}