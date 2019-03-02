import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="Header">
            <Navbar />
            <div className="overlay"></div>
            <div className="header-container">
                <h1 className="header-title">Clean Blog</h1>
                <h2 className="header-subtitle">A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}

export default Header;