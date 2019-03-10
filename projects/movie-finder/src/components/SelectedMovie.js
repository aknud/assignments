import React from 'react';
import { withState } from '../shared/StateHolder';
import Button from "./../shared/Button";

class SelectedMovie extends React.Component {
    componentDidMount() {
        this.props.getSeletedItem(this.props.match.params.id)
    }


    render() {
        let { selectedItem } = this.props;
        return (
            <div className="selected-container">  
                <Button className="selected-btn"
                onClick={() => this.props.history.goBack()} buttonText="Back to Search Results"></Button>
                <div key={selectedItem.imdbID} className="movie-info">
                    {selectedItem.Poster === "N/A" ?
                        <img className="selectedImg" src="https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg" alt="" />
                        :
                        <img className="selectedImg" src={selectedItem.Poster} alt="Movie Poster Unavailable" />
                    }
                    <h1>{selectedItem.Title}</h1>
                    <p>({selectedItem.Year})</p>
                    <p><b>Rated:</b> {selectedItem.Rated}</p>
                    <p><b>Genre: </b> {selectedItem.Genre}</p>
                    <p><b>Plot: </b> {selectedItem.Plot}</p>
                    <p><b>Director: </b> {selectedItem.Director}</p>
                    <p><b>Actors: </b> {selectedItem.Actors}</p>
                    {selectedItem.Website !== "N/A" ? <a href={selectedItem.Website} target="blank"><i>Website</i></a> : null}
                </div>
            </div>
        )
    }
};

export default withState(SelectedMovie);