import React, {Component} from 'react';
import {withState} from "./../shared/StateHolder";
import Button from "./../shared/Button";

class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            year: '',
            genre: ''
        } 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let titleString = this.state.title;
        this.props.getData(titleString.replace(" ", "+"), this.state.year)
        this.props.history.replace("/results")
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit} className="Form">
                    <legend>Search for a movie</legend>
                    <div className="input-container">
                        <label htmlFor="title"></label>
                        <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} placeholder="*Title" required />
                        <label htmlFor="year"></label>
                        <input type="text" name="year" id="year" onChange={this.handleChange} value={this.state.year} placeholder="Year"/>
                        <Button className="form-btn" buttonText="Submit" />
                    </div>
            </form>
        )
    }
}

export default withState(Form);