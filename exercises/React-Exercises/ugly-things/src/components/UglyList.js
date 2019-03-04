import React, { Component } from 'react';
import {withState} from "../shared/StateHolder";

class UglyList extends Component {

    render() {
        let mappedUglies = this.props.array.map(item => {
            return (
                <div key={Math.random() + item.url}>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                    <img src={item.url} alt={item.description}/>
                </div>
            )
        })
        return (
            <>
                {mappedUglies}
            </>
        );
    }
}

export default withState(UglyList);