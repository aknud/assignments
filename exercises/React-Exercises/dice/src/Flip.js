import React from "react"

export default class Flip extends React.Component {
    constructor(){
        super()
        this.state = {
            happy: true
        }
    }

    click = () => {
        this.setState((prevState)=>{
            return {
                happy: !prevState.happy
            }
        })
    }

    render(){
        let it = this.state.happy ? 
        <div>
            <img src="https://metrouk2.files.wordpress.com/2015/08/ad_177985668.jpg?quality=90&strip=all&zoom=1&resize=644%2C362" alt=""/>
            <h3>Like</h3>
        </div> : 
        <div>
            <img src="https://media.giphy.com/media/7rj2ZgttvgomY/giphy.gif" alt=""/>
            <h3>Dislike</h3>
        </div>
        return (
            <div>
                <button onClick={this.click} >Click me!</button>
                {it}
            </div>
        )
    }
}