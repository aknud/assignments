import React from "react"
import {withState} from "./../shared/StateHolder";
import { Link } from "react-router-dom";
 
const ResultsList = (props) => {
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
                        <p>Type: {item.Type}</p>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div>
            {props.searchError ? 
                <>
                    <h1>Sorry we couldn't find any movies with that title.</h1>
                    <Link to="/search"><button>Try a different search</button></Link>
                </> 
                :
                <>
                {mappedMovies}
                </>
            }
        </div>
    );
};

export default withState(ResultsList);