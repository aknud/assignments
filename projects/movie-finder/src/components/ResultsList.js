import React from "react"
import {withState} from "./../shared/StateHolder";
import { Link } from "react-router-dom";
import Button from "./../shared/Button";
 
const ResultsList = (props) => {
    console.log(props)
    let mappedMovies = props.arr.map(item => {
        return (
            <div className="movie-list" key={item.imdbID}>
                <Link to={`/selected-movie/${item.imdbID}`}>
                    <div className="list-item">
                        {item.Poster === "N/A" ? 
                            <img src="https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg" alt=""/> 
                            : 
                            <img src={item.Poster} alt="Movie Poster Unavailable"/>
                        }
                        <h1>{item.Title}</h1>
                        <p>({item.Type})</p>
                    </div>
                </Link>
            </div>
        )
    })
    let pages = props.pagesArray.map(page => {
        return (
            <div key={page}>
                <div className="page" onClick={()=> props.getMore(props.searchTitle, page)}>{page}</div>
            </div>
        )
    })
    return (
        <div>
            {props.searchError ? 
                <>
                    <h1>Sorry we couldn't find any movies with that title.</h1>
                    <Link to="/search"><Button className="back-btn" buttonText="Try a different search" /></Link>
                </> 
                :
                <>
                    <Button className="back-btn" onClick={()=> props.history.replace("/search")} buttonText="Back to Search" />
                    <div className="movie-results">
                        {mappedMovies}
                    </div>
                    <div className="page-numbers">
                        {pages}
                    </div>
                </>
            }
        </div>
    );
};

export default withState(ResultsList);