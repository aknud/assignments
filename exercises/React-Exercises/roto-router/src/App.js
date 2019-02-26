import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import Nav from './Nav';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
