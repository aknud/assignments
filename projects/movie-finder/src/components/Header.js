import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/search"><h1>Movies You Could've Just Googled</h1></Link>
        </div>
    );
};

export default Header;