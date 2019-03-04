import React, {Component} from 'react';
import {withState} from "./../shared/StateHolder";

class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            url: '',
            id: 1
        } 
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {title, description, url } = this.state;
        let newObj = {
            title,
            description,
            url
        }
        //get it onto StateHolder
        this.props.addObjs(newObj)
        //clear inputs
        this.setState({
            title: "",
            description: "",
            url: ""
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Enter your ugly thing</legend>
                    <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} placeholder="title" />
                    <input type="text" name="description" id="description" onChange={this.handleChange} value={this.state.description} placeholder="description" />
                    <input type="text" name="url" id="url" onChange={this.handleChange} value={this.state.url} placeholder="image url" />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        )
    }
}

export default withState(Form);