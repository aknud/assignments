import React from "react"
import Pet from "./Pet"


let styles = {
    border: "1px solid lightblue",
    width: 400,
    margin: "10px auto",
    textAlign: "center",
    backgroundColor: "lightblue",
    borderRadius: 10
}

let petStyles = {
    border: "1px solid black",
    margin: "10px 40px",
    backgroundColor: "white",
    borderRadius: 10
}

const Friend = (props) => {
    return (
        <div style={styles}>
            <h1>{props.name}</h1>
            <h2>age: {props.age}</h2>
            <h2>{props.name}'s Pets</h2>
            <div style={petStyles}>
                <Pet pets={props.pets} />
            </div>
        </div>
    )
}

export default Friend