import React from "react";
import LowerNav from "./LowerNav";

export default class Nav extends React.Component {
    render(){
        return (
            <div className="nav" >
                <img src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" alt="Welcome! Go to Zappos.com Homepage!" className="z_icon"/>
                <form action="/search" method="get">
                    <label htmlFor="search">Search</label>
                    <input type="search" name="nav-search" id="search" placeholder="Search for shoes, clothes, etc."/>
                    <button type="submit">Search</button>
                </form>
                <div>
                    <button>My Cart</button>
                </div>
                <LowerNav />
            </div>
        )
    }
}