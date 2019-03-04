import React, { Component } from 'react';
import Ugly from "./Ugly";
import {withState} from "../shared/StateHolder";

class UglyList extends Component {
    componentDidMount() {
        this.props.getUglies()
    }
    

    render() {
        let mappedUglies = this.props.array.map(item => {
            return (
                <Ugly 
                    key={item._id} 
                    item={item} 
                />
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