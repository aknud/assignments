import React from "react"

const Vacation = (props) => {
    const styles = {
        border: "1px solid black",
        width: 400,
        margin: "10px auto",
        textAlign: "center",
        backgroundImage: props.pic
      }
    return (
        <div style={styles}>
            <h1>Location: {props.place}</h1>
            <h2>Cost: {props.dollars} {props.price}</h2>
            <h3>Best time to go: {props.timeToGo}</h3>
        </div>
    )
}

export default Vacation;