import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/about"><h1>About</h1></Link>
            <Link to="/services"><h1>Services</h1></Link>
        </div>
    )
}

export default Nav