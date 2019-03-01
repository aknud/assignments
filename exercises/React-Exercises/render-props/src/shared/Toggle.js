import { Component } from 'react';

//we dont need React on line one because we are not returning jsx in the render.

class Toggle extends Component {
    constructor(){
        super()
        this.state = {
            on: false
        }
    }

    toggler = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
    //this is another way to render it:
    // render() {
    //     const poop = { 
    //         on: this.state.on, toggler: this.toggler 
    //     }
    //     return this.props.render(poop)
    // }
    render(){
        return this.props.render({
            on: this.state.on,
            toggler: this.toggler
        })
    }
}

export default Toggle;
