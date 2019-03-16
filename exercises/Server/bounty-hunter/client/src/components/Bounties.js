import React from 'react';
import { withState } from '../shared/StateHolder';
import Bounty from "./Bounty"

class Bounties extends React.Component {
    componentDidMount() {
        this.props.getBounties()
    }
    

    render(){
        let mappedBounties = this.props.bounties.map(bounty => 
        <Bounty key={bounty._id} payload={bounty}/>)
        return (
            <div>
                {mappedBounties}
            </div>
        );
    }
};

export default withState(Bounties);

//Find out why this proxy error keeps happening.
//Proxy error: Could not proxy request /bounty from localhost:3000 to http://localhost:3090.
// See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).