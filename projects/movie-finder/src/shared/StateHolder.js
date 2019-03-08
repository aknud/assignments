import React from "react";
import axios from "axios";
import {api_key} from "./api";
const { Consumer, Provider } = React.createContext();

export default class StateHolder extends React.Component {
    constructor(){
        super()
        this.state = {
            arr: [],
            selectedItem: {},
            searchError: false
        }
    }

    getData = (title, year) => {
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${title}`).then(res => {
            console.log("response from api", res.data)
            res.data.Response === "False" ? 
            this.setState({searchError: true})
            :
            this.setState({ arr: res.data.Search, searchError: false})
        })
    }

    getSeletedItem = (id) => {
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}&plot=full`).then(res => {
            console.log("selected Item from api",res.data)
            this.setState({selectedItem: res.data})
        })
    }

    render(){
        return (
            <Provider value={{
                getData: this.getData,
                getSeletedItem: this.getSeletedItem,
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