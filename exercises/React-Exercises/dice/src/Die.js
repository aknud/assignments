import React from "react"

export default class Die extends React.Component {
    constructor() {
        super()
        this.state = {
            clicksCount: 0,
        }
    }

    hold = (e) => {
        console.log(e)
        
    }

    render() {
        console.log(this.props)
        const dieStyles = {
            border: "1px solid black",
            textAlign: "center",
            fontSize: 40,
            padding: 20
        }

        return (
            <div style={dieStyles} onClick={this.hold}>
                {this.props.num}
            </div>
        )
    }
}