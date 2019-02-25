import React from "react"
import './App.css';


const SuperShia = (props) => {
    console.log(props)
    let shias = props.obj.map((shia, i) => {
        return (
            <div className="shia_box" onClick={() => props.catchy(i)} key={i + shia.name}>
                <h1>{shia.name}</h1>
                <img src={shia.image} alt="Shia Lebeouf"/>
            </div>
        )
    })
    return (
    <div>
        {shias}
    </div>
    );
}

export default SuperShia