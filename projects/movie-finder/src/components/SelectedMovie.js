import React from 'react';
import { Link } from "react-router-dom";

const SelectedMovie = (props) => {
    let {items} = props;
    console.log(items)
    return (
        <div>
            {items.Response === "False" ? 
                <div>
                    <h1>Sorry we couldn't find any movies with that title.</h1>
                    <Link to="/search"><button>Try a different search</button></Link>
                </div>
                :
                <div key={items.imdbID}>
                    <img style={{height: 200, width: 140}} src={items.Poster} alt={items.Title}/>
                    <h1>{items.Title}</h1>
                    <p>({items.Year})</p>
                    <p>Genre: {items.Genre}</p>
                    <p>{items.Plot}</p>
                </div>
            }
        </div>
        
    )
};

export default SelectedMovie;