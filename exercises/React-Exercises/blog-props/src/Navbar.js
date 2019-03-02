import React from "react";
import { withToggler } from "./Toggle";


const Navbar = ({on, toggle}) => {
    return (
        <div className="Nav">
            <div className="navbar">
                <a href="/" className="navBrand">Start Bootstrap</a>
                <button className="menu-btn"  onClick={toggle}>MENU <i className='fas fa-bars'></i></button> 
            </div>
            <div className="navbar-nav">
                <ul className={on ? "open" : "closed"}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Sample Post</li>
                    <li>Contact</li>
                </ul> 
            </div>
        </div>
    )
}

export default withToggler(Navbar);