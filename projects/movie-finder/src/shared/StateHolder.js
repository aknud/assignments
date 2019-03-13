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
            searchError: false,
            searchTitle: "",
            pagesArray: [],
            currentPage: 1
        }
    }

    getData = (title, year) => {
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${title}&year=${year}`).then(res => {
            res.data.Response === "False" ? 
            this.setState({searchError: true})
            :
            this.setState({ 
                arr: res.data.Search, 
                searchError: false,
                searchTitle: title
            })
            this.makePages(Math.ceil(res.data.totalResults / 10))
        })
    }

    getSeletedItem = (id) => {
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}&plot=full`).then(res => {
            this.setState({selectedItem: res.data})
        })
    }

    makePages = (pages) => {
        let pagesArr = []
        for(let i = 1; i <= pages; i++){
            pagesArr.push(i)
        }
        this.setState({pagesArray: pagesArr})
    }

    getMore = (title, page, year) => {
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${title}&page=${page}&year=${year}`).then(res => {
            this.setState({
                arr: res.data.Search,
                currentPage: page
            })
        })
    }

    render(){
        return (
            <Provider value={{
                getData: this.getData,
                getSeletedItem: this.getSeletedItem,
                getMore: this.getMore,
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