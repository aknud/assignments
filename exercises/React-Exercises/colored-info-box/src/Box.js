import React from "react"

const Box = (props) => {
    return (
        <div style={{border: "1px solid black", backgroundColor: props.color, width: 400, margin: "20px auto", textAlign: "center", borderRadius: 10}} >
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}

export default Box