import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const redirectPage = () => {
        window.location = "https://www.google.com"
    }

    return (
        <div className="Home">
            <h1>Get all the information for your favorite movies, even though you could’ve just googled it…But here you are.</h1>
            <Link to="/search"><button>Yeah I'm here already, might as well try it out.</button></Link>
            <button onClick={redirectPage}>Wait, this isn't google? Take me to google where all my wishes are granted.</button>
        </div>
    );

};

export default Home;