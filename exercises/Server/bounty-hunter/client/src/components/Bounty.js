import React from 'react';
import {withState} from "../shared/StateHolder"

const Bounty = (props) => {
    console.log(333,props)
    let {payload} = props;
    return (
        <div className="Bounty">
            <h1>{payload.first} {payload.last}</h1>
            <img src={payload.imgUrl} alt="" style={{height: 250, width: 300}}/>
            <h3>Bounty: ${payload.bounty}</h3>
            <h3>Status: {payload.living ? "Alive" : "Deceased"}</h3>
            <h3>Affiliation: {payload.affiliation}</h3>
            <button onClick={() => props.deleteBounty(payload._id)}>Remove Bounty</button>
        </div>
    );
};

export default withState(Bounty);