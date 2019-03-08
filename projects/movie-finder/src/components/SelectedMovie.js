import React from 'react';
import { withState } from '../shared/StateHolder';

class SelectedMovie extends React.Component {
    componentDidMount() {
        this.props.getSeletedItem(this.props.match.params.id)
    }


    render() {
        let { selectedItem } = this.props;
        return (
            <div>
                <button onClick={() => this.props.history.goBack()}>Back to search results</button>
                <div key={selectedItem.imdbID}>
                    {selectedItem.Poster === "N/A" ?
                        <img src="https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg" alt="" />
                        :
                        <img src={selectedItem.Poster} alt="Movie Poster Unavailable" />
                    }
                    <h1>{selectedItem.Title}</h1>
                    <p>({selectedItem.Year})</p>
                    <p><b>Rated:</b> {selectedItem.Rated}</p>
                    <p>Genre: {selectedItem.Genre}</p>
                    <p>Plot: {selectedItem.Plot}</p>
                    <p>Director: {selectedItem.Director}</p>
                    <p>Actors: {selectedItem.Actors}</p>
                    {selectedItem.Website !== "N/A" ? <a href={selectedItem.Website} target="blank">Website</a> : null}
                </div>
            </div>
        )
    }
};

export default withState(SelectedMovie);