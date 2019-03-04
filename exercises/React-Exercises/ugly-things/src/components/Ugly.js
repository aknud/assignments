import React, { Component } from 'react';
import Form from "./Form"
import {withState} from "./../shared/StateHolder"

class Ugly extends Component {
    constructor(){
        super()
        this.state = {
            edit: true
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        let {item} = this.props
        return (
            <div>
                {this.state.edit ? 
                    <div>
                        <h1>{item.title}</h1>
                        <h2>{item.description}</h2>
                        <img src={item.imgUrl} alt={item.description}/>
                        <button onClick={()=> this.props.deleteUgly(item._id)}>Delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                    :
                    <Form button="save" type="edit" item={item} toggle={this.toggle}/>
                }
            </div>
        );
    }
}

export default withState(Ugly);