import React from "react";
import { Link } from "react-router-dom";
import Button from "./../shared/Button";

const Home = () => {

    const redirectPage = () => {
        window.location = "https://www.google.com"
    }

    return (
        <div className="Home">
            <h1 className="home-message">Get all the information for your favorite movies, even though you could’ve just googled it… <br/> But here you are.</h1>
            <Link to="/search"><Button className="home-btns" buttonText="Yeah I'm here already, might as well try it out."/></Link>
            <Button className="home-btns" onClick={redirectPage} buttonText="Wait, this isn't google? Take me to google where all my wishes are granted."/>
        </div>
    );

};

export default Home;