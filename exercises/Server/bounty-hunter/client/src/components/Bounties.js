import React from 'react';
import { withState } from '../shared/StateHolder';
import Bounty from "./Bounty"

class Bounties extends React.Component {
    componentDidMount() {
        this.props.getBounties()
    }
    

    render(){
        console.log(111, this.props)
        let mappedBounties = this.props.bounties.map(bounty => <Bounty key={bounty._id} payload={bounty}/>)
        return (
            <div>
                {mappedBounties}
            </div>
        );
    }
};

export default withState(Bounties);