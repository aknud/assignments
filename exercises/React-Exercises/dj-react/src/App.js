import React, {Component} from "react"
import "./App.css"
import shiaSong from "./Shia LaBeouf Live - Rob Cantor.mp3"

class App extends Component {
    constructor(){
        super();
        this.state = {
            box1: "white",
            box2: "White",
            box3: "White",
            box4: "White",
            box5: "White",
            box6: "White",
            box7: "White",
            box8: "White",
            changeColor: true,
            playSound: false
        }
    }

    blackOrWhite = (prevState) => {
        // this.setState((prevState)=>{
        //     prevState.changeColor ? 
            
        // })
        this.state.changeColor ? 
        this.setState({
            box1: "black",
            box2: "black",
            box3: "black",
            box4: "black",
            changeColor: false
        }) :
        this.setState({
            box1: "white",
            box2: "white",
            box3: "white",
            box4: "white",
            changeColor: true
        })
    }

    purple = () => {
        this.setState({
            box1: "purple",
            box2: "purple"
        })
    }

    threeBlue = () => {
        this.setState({
            box3: "blue"
        })
    }

    fourBlue = () => {
        this.setState({
            box4: "blue"
        })
    }

    fiveRed = () => {
        this.setState({
            box5: "red"
        })
    }

    sixYellow = () => {
        this.setState({
            box6: "yellow"
        })
    }
    // alert = (tSc) => {
    //     this.myRef = React.createRef();
    //     if(tSc === timerStates.COMPLETE)
    //      return (
    //       <audio ref={this.myRef} src={soundfile} autoPlay/>
    //      )
    //    }
    audio = new Audio(shiaSong)
    song = () => {
        this.setState({
            playSound: !this.state.playSound
        }, () => {
            this.state.playSound ? this.audio.play() : this.audio.pause()
        })
    }

    changeAllColors = (prevState) => {
        this.setState({
            box1: "#" +  Math.random().toString(16).substr(-6),
            box2: "#" +  Math.random().toString(16).substr(-6),
            box3: "#" +  Math.random().toString(16).substr(-6),
            box4: "#" +  Math.random().toString(16).substr(-6),
            box5: "#" +  Math.random().toString(16).substr(-6),
            box6: "#" +  Math.random().toString(16).substr(-6),
            box7: "#" +  Math.random().toString(16).substr(-6),
            box8: "#" +  Math.random().toString(16).substr(-6),
            changeColor: !prevState.changeColor
        })
    }



    render(){
        return (
            <div className="grid">
                <div className="box" style={{backgroundColor: this.state.box1}}></div>
                <div className="box" style={{backgroundColor: this.state.box2}}></div>
                <div className="box" style={{backgroundColor: this.state.box3}}></div>
                <div className="box" style={{backgroundColor: this.state.box4}}></div>
                <div className="box" style={{backgroundColor: this.state.box5}}></div>
                <div className="box" style={{backgroundColor: this.state.box6}}></div>
                <div className="box" style={{backgroundColor: this.state.box7}}></div>
                <div className="box" style={{backgroundColor: this.state.box8}}></div>
                <button onClick={this.blackOrWhite}>{this.state.changeColor ? "white" : "black"}</button>
                <button onClick={this.purple}>Purple</button>
                <button onClick={this.threeBlue}>Blue</button>
                <button onClick={this.fourBlue}>Blue</button>
                <button onClick={this.fiveRed}>Red</button>
                <button onClick={this.sixYellow}>Yellow</button>
                <button onClick={this.song}>Put Music in me!</button>
                <button onClick={this.changeAllColors}>Surprise</button>
            </div>
        )
    }
}

export default App;