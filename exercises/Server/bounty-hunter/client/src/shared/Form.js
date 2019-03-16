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
    componentDidMount() {
        if(this.props.type === "edit"){
            let {first, last, imgUrl, bounty, affiliation} = this.props.payload
            this.setState({first, last, imgUrl, bounty, affiliation})
        }
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.type === "add"){
            this.props.addBounty(this.state)
        
        } else {
            this.props.editBounty(this.props.payload._id, this.state)
        }
        this.setState({
            first: "",
            last: "",
            imgUrl: "",
            bounty: "",
            affiliation: ""
        })
        this.props.toggle()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="first" id="" placeholder="First Name" value={this.state.first} onChange={this.handleChange} required/>
                <input type="text" name="last" id="" placeholder="Last Name" value={this.state.last} onChange={this.handleChange} required/>
                <input type="text" name="imgUrl" id="imgUrl" placeholder="image url" value={this.state.imgUrl} onChange={this.handleChange} required/>
                <label htmlFor="bounty">Bounty Amount:</label>
                <input type="number" name="bounty" id="bounty" value={this.state.bounty}  onChange={this.handleChange} required/>
                <input type="text" name="affiliation" id="affiliation" placeholder="Affiliation" value={this.state.affiliation} onChange={this.handleChange} required/>
                <button>{this.props.button}</button>
            </form>
        );
    }
}

export default withState(Form);