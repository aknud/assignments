import React from "react"
import Die from "./Die"

export default class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            one: this.randomNum(),
            two: this.randomNum(),
            three: this.randomNum(),
            four: this.randomNum(),
            five: this.randomNum(),
            held: false
        }
    }

    randomNum = () =>  (Math.ceil(Math.random() * 6))
        
    rollDice = () => {
        this.setState({
            one: this.randomNum(),
            two: this.randomNum(),
            three: this.randomNum(),
            four: this.randomNum(),
            five: this.randomNum()
        })
    }

    // hold = () => {
    //     this.setState(prevState => {
    //         return {
    //             held: !prevState.held
    //         }
    //     })
    //     console.log("HEY NOW")
    // }


    render(){
        const boxStyle = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
        }
        const buttonStyle = {
            width: "max-content",
            height: 40,
            padding: 10,
            right: 0,
            left: 1,
            position: "absolute",
            margin: " 20px auto",

        }
        
        return (
            <div>
                <div style={boxStyle}>
                    <Die num={this.state.one}/>
                    <Die num={this.state.two}/>
                    <Die num={this.state.three}/>
                    <Die num={this.state.four}/>
                    <Die num={this.state.five}/>
                </div>
                <button style={buttonStyle} onClick={this.rollDice}>Roll Dice</button>
            </div>
        )
    }
}
