import React from "react";
import { withToggler } from "./Toggle";

const Menu = ({on, toggle}) => {
    return (
        <div>   
            <button onClick={toggle}>Menu</button>
            <ul className={on ? "open" : "closed"}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default withToggler(Menu);