import React, {Component} from 'react';
import {withState} from "./../shared/StateHolder";

class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: ''
        } 
    }

    componentDidMount() {
        if(this.props.type === "edit"){
            let {title, description, imgUrl } = this.props.item
            this.setState({title, description, imgUrl})
        }
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.type === "add"){
            this.props.addObjs(this.state)
        }else {
            this.props.editUgly(this.props.item._id, this.state)
            this.props.toggle()
        } 
        //clear inputs
        this.setState({
            title: "",
            description: "",
            imgUrl: ""
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>{this.props.type === "add" ? "Enter" : "Edit"} your ugly thing</legend>
                    <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} placeholder="title" />
                    <input type="text" name="description" id="description" onChange={this.handleChange} value={this.state.description} placeholder="description" />
                    <input type="text" name="imgUrl" id="imgUrl" onChange={this.handleChange} value={this.state.imgUrl} placeholder="image url" />
                    <button>{this.props.button}</button>
                </fieldset>
            </form>
        )
    }
}

export default withState(Form);