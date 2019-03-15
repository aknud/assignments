import React, { Component } from 'react';
import {withState} from "./../shared/StateHolder";

class Form extends Component {
    constructor(){
        super()
        this.state = {
            first: "",
            last: "",
            imgUrl: "",
            bounty: "",
            affiliation: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => [
        e.preventDefault()
        // this.props.addBounty(this.state)
    ]
    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="first" id="" placeholder="First Name" value={this.state.first}/>
                <input type="text" name="last" id="" placeholder="Last Name" value={this.state.last}/>
                <input type="text" name="imgUrl" id="imgUrl" placeholder="image url" value={this.state.imgUrl}/>
                <label htmlFor="bounty">Bounty Amount:</label>
                <input type="number" name="bounty" id="bounty" value={this.state.bounty} />
                <input type="text" name="affiliation" id="affiliation" placeholder="Affiliation" value={this.state.type}/>
                <button>Add Bounty</button>
            </form>
        );
    }
}

export default withState(Form);