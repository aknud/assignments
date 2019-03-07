import React from "react"
import {withState} from "./../shared/StateHolder";
import SelectedMovie from "./SelectedMovie";
 
const ResultsList = (props) => {
    let mappedMovies = props.arr.map(item => {
        return ( <SelectedMovie key={item.imdbID} items={item}/>)
    })
    return (
        <div>
            {mappedMovies}
        </div>
    );
};

export default withState(ResultsList);