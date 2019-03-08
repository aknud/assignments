import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/search"><h1 className="header-title">Movie Finder</h1></Link>
        </div>
    );
};

export default Header;